"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DirectedGraph_1 = require("./AdjList/classes/DirectedGraph");
const main = () => {
    let grafo = new DirectedGraph_1.DirectedGraph();
    grafo.addVertex('1');
    grafo.addVertex('2');
    grafo.addVertex('3');
    grafo.addEdge('1', '2');
    grafo.addEdge('1', '3');
    grafo.display();
};
main();
