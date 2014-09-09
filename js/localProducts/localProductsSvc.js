angular.module("localProducts")
    .factory("localProductsSvc", function ($rootScope, $log) {
        var _products = [
            {
                title: "Rudolph Cookies",
                image: "http://img4-1.myrecipes.timeinc.net/i/recipes/sl/07/11/sugar-cookies-sl-1673189-l.jpg",
                price: "$10.00",
                description: "These are Rudolph Cookies."
            },
            {
                title: "Chocolate Chip Cookies",
                image: "http://canarydwarf.co.uk/cms/wp-content/uploads/cookie-300x300.jpg",
                price: "$5.00",
                description: "These are Chocolate Chip Cookies."
            },
            {
                title: "Star Cookies",
                image: "http://img4-1.myrecipes.timeinc.net/i/recipes/sl/08/07/sugar-cookie-sl-1816173-l.jpg",
                price: "$15.00",
                description: "These are Star Cookies."
            },
            {
                title: "Turtle Cookies",
                image: "http://img4-3.myrecipes.timeinc.net/i/recipes/oh/gbp/frosted-turtle-cookies-oh-l.jpg",
                price: "$20.00",
                description: "These are Turtle Cookies."
            }
        ];

        var getProducts = function () {
            return _products;
        };

        var addProduct = function (newProduct) {
            _products.push(newProduct);
            $rootScope.$broadcast("product:added");
            $log.info("product:added");
        };

        var updateProduct = function (idx, product) {
            _products[idx] = product;
            $rootScope.$broadcast("product:updated");
            $log.info("product:updated");
        };

        var deleteProduct = function (idx) {
            _products.splice(idx, 1);
            $rootScope.$broadcast("product:deleted");
            $log.info("product:deleted");
        };

        var findProductByIdx = function (idx) {
            return _products[idx];
        };

        return {
            getProducts: getProducts,
            findProductByIdx: findProductByIdx,
            addProduct: addProduct,
            updateProduct: updateProduct,
            deleteProduct: deleteProduct

        };
    });
