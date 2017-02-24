import {ILocationProvider} from 'angular';
import IRoute = angular.route.IRoute;
import IRouteProvider = angular.route.IRouteProvider;

interface IRouteDefinition {
    route: string,
    definition: IRoute
}

let routes: IRouteDefinition[] = [];

config.$inject = ['$routeProvider', '$locationProvider'];
export function config($routeProvider: IRouteProvider, $locationProvider: ILocationProvider) {
    routes.forEach(function(routeDefinition) {
        $routeProvider.when(`/${routeDefinition.route}`, routeDefinition.definition);
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    
    // Enable HTML5 URLs
    // $locationProvider.html5Mode(true);
}

export let Route = {
    addRoute(route: IRouteDefinition) {
        routes.push(route);
    }
};