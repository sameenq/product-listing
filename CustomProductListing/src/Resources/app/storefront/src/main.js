import CustomProductListing from './custom-product-listing/custom-product-listing.plugin';

const PluginManager = window.PluginManager;
PluginManager.register('CustomProductListing', CustomProductListing);
