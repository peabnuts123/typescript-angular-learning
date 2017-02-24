import {module} from 'angular';
import {config} from './routeConfig';

import {home} from './home';
import {product} from './product';

import * as ngRoute from 'angular-route';

export let app = module('app', [
        product.name,
        home.name,
        ngRoute
    ])
    .config(config);
