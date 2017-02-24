import {product} from './index';
import {module} from 'angular';
import {Route} from '../routeConfig';
import Product from './Product';

Route.addRoute({
    route: 'product',
    definition: {
        controller: 'Product',
        controllerAs: 'ctrl',
        templateUrl: 'Components/product/product.html'
    }
});

export default class ProductController {
    products: Product[];
    readonly test: string = "I am the Product Controller";
}

product.controller('Product', ProductController); 