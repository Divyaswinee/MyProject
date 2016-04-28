
var app = angular.module('productListingApp' , []);

app.controller('productListingCtrl', function($scope,$http){


	$scope.cart = [];

		// fetch products from server
	$http.get('productListJSON.json').success(function (response) {
		$scope.products = response.products;
		$scope.totalProduct = response.products.length;
	});

		//add Product/increase product quantity into cart
	$scope.addToCart = function (product) {
		var found = false;
		$scope.cart.forEach(function (item) {
			if (item.productName === product.productName) {
				item.quantity++;
				found = true;
			}
		});
		if (!found) {
			$scope.cart.push(product);
		}
	};

		//remove product/decrease quantity of product from the cart
	$scope.removeFromCart = function (product) {
		var found = false;
		$scope.cart.forEach(function (item) {
			if (item.productName === product.productName) {
				item.quantity--;
				found = true;
			}
			if (!found) {
				var index = $scope.cart.indexOf(item);
		    	if (index != -1) {
		        	$scope.cart.splice(index, 1);
		    	}
			}
		});

	};

		//remove complete product item from the cart
	$scope.removeItem = function (item) {
    	var index = $scope.cart.indexOf(item);
    	if (index != -1) {
        	$scope.cart.splice(index, 1);
    	}
	};
	
})
