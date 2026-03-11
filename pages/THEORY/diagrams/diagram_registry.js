window.diagramRegistry = {};

window.registerDiagram = function(name, fn){
diagramRegistry[name] = fn;
};