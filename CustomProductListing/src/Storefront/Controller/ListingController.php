<?php declare(strict_types=1);

namespace CustomProductListing\Storefront\Controller;


use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Shopware\Storefront\Page\Navigation\NavigationPageLoaderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @RouteScope(scopes={"storefront"})
 */
class ListingController extends StorefrontController
{
    private  $navigationPageLoader;

    /**
     * ListingController constructor.
     * @param NavigationPageLoaderInterface $navigationPageLoader
     */
    public function __construct(NavigationPageLoaderInterface $navigationPageLoader)
    {
        $this->navigationPageLoader = $navigationPageLoader;
    }

    /**
     * @Route("/allproducts", name="frontend.listing.index", methods={"GET"})
     * @param SalesChannelContext $context
     * @param Request $request
     * @return Response
     */
    public function index(SalesChannelContext $context, Request $request): Response
    {
        $page = $this->navigationPageLoader->load($request, $context);
        return $this->renderStorefront(
            '@CustomProductListing/storefront/page/listing/index.html.twig',[
            'page' => $page
        ]);
    }

}
