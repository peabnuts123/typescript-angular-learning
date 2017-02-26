let manifest = [
    new Library('jquery', ['jquery']),
    new Library('angular', ['angular', 'angular-route']),
    new Library('bootstrap', [
        './node_modules/bootstrap/dist/js/npm.js',
        './node_modules/bootstrap/less/bootstrap.less', 
        './node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot',
        './node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg',
        './node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf',
        './node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff',
        './node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2'
    ])
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