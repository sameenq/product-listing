# Custom Product Listing Plugin - Shopware 6

## Installation Steps
1. Copy plugin folder into custom/plugins folder of the Shop.
2. Connect to docker container, run the following commands.
-  bin/console plugin:refresh
-  bin/console plugin:install --activate CustomProductListing
-  Build storefront if necessary
-  bin/console theme:compile
-  bin/console cache:clear

