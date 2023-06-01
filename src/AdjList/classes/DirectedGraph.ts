import { Neighbors } from "./Neighbors";
import { GraphInterface } from "../GraphInterface";
import { Edge } from "./Edge";

export class DirectedGraph implements GraphInterface {
    vertices: { [vertex_name: string]: Neighbors | null }
    constructor() {
        this.vertices = {}
    }

    addVertex: (name: string) => void = (name) => {
        if (this.vertices.hasOwnProperty(name)) return;
        this.vertices[name] = new Neighbors();
    };

    addEdge: (v1_name: string, v2_name: string, weigth?: number) => void = (v1, v2, weigth) => {
        if (!this.vertices.hasOwnProperty(v1)) this.addVertex(v1);
        if (!this.vertices.hasOwnProperty(v2)) this.addVertex(v2);
        this.vertices[v1]?.push(v2, weigth)
    };

    removeEdge: (v1_name: string, v2_name: string) => Edge = (v1, v2) => {
        if (!this.vertices.hasOwnProperty(v1)) throw new Error(`Doesn't exist vertice ${v1} in the graph`);
        if (!this.vertices.hasOwnProperty(v2)) throw new Error(`Doesn't exist vertice ${v2} in the graph`);
        let removed = this.vertices[v1]!.removeFromName(v2)
        return new Edge(v1, v2, removed.value['weigth'], removed.value['capacity'])
    };

    edgesListFromVertice: (name: string) => Edge[] = v => {
        if (!this.vertices.hasOwnProperty(v)) throw new Error(`Doesn't exist vertice ${v} in the graph`);
        let edges_list = []
        let head = this.vertices[v]?.head
        while (head?.next != null) {
            edges_list.push(new Edge(v, head.vertex_name!, head.value['weigth'], head.value['capacity']))
        }
        return edges_list;
    };

    removeVertex: (name: string) => void = v => {};
    updateEdge: (v1_name: string, v2_name: string) => void = (v1, v2) => {};
    verticesNameList: () => string[] = () => {
        return Object.keys(this.vertices)
    };
    numberOfVertices: () => number = () => this.verticesNameList().length;
    
    display: () => void = () => {
        for(let elem of this.verticesNameList()) {
            console.log(`${elem}: ${this.vertices[elem]!.toString()}`)
        }

    };
}