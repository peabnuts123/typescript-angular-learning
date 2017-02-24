import {home} from './index';
import {Route} from '../routeConfig';

Route.addRoute({
    route: 'home',
    definition: {
        controller: 'Home',
        controllerAs: 'ctrl',
        templateUrl: 'Components/home/home.html'
    }
});

export default class HomeController {
    test: string;
    static $inject: string[] = [];
    constructor() {
        this.test = "I am the Home Controller";
    }
}
home.controller('Home', HomeController);