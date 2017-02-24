let manifest = [
    new Library('jquery', ['jquery']),
    new Library('angular', ['angular', 'angular-route']),
    new Library('bootstrap', ['bootstrap-webpack!./config/bootstrap.config.js'])
];

var libraries = {};

libraries.entryPoints = {};
manifest.forEach(function(library) {
    libraries.entryPoints[library.name] = library.entryPoints;
});

libraries.all = manifest.map(library => library.name);

module.exports = libraries;

function Library(name, entryPoints) {
    this.name = name;
    this.entryPoints = entryPoints;
}