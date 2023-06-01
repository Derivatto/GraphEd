"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectedGraph = void 0;
const Neighbors_1 = require("./Neighbors");
const Edge_1 = require("./Edge");
class DirectedGraph {
    constructor() {
        this.addVertex = (name) => {
            if (this.vertices.hasOwnProperty(name))
                return;
            this.vertices[name] = new Neighbors_1.Neighbors();
        };
        this.addEdge = (v1, v2, weigth) => {
            var _a;
            if (!this.vertices.hasOwnProperty(v1))
                this.addVertex(v1);
            if (!this.vertices.hasOwnProperty(v2))
                this.addVertex(v2);
            (_a = this.vertices[v1]) === null || _a === void 0 ? void 0 : _a.push(v2, weigth);
        };
        this.removeEdge = (v1, v2) => {
            if (!this.vertices.hasOwnProperty(v1))
                throw new Error(`Doesn't exist vertice ${v1} in the graph`);
            if (!this.vertices.hasOwnProperty(v2))
                throw new Error(`Doesn't exist vertice ${v2} in the graph`);
            let removed = this.vertices[v1].removeFromName(v2);
            return new Edge_1.Edge(v1, v2, removed.value['weigth'], removed.value['capacity']);
        };
        this.edgesListFromVertice = v => {
            var _a;
            if (!this.vertices.hasOwnProperty(v))
                throw new Error(`Doesn't exist vertice ${v} in the graph`);
            let edges_list = [];
            let head = (_a = this.vertices[v]) === null || _a === void 0 ? void 0 : _a.head;
            while ((head === null || head === void 0 ? void 0 : head.next) != null) {
                edges_list.push(new Edge_1.Edge(v, head.vertex_name, head.value['weigth'], head.value['capacity']));
            }
            return edges_list;
        };
        this.removeVertex = v => { };
        this.updateEdge = (v1, v2) => { };
        this.verticesNameList = () => {
            return Object.keys(this.vertices);
        };
        this.numberOfVertices = () => this.verticesNameList().length;
        this.display = () => {
            for (let elem of this.verticesNameList()) {
                console.log(`${elem}: ${this.vertices[elem].toString()}`);
            }
        };
        this.vertices = {};
    }
}
exports.DirectedGraph = DirectedGraph;
