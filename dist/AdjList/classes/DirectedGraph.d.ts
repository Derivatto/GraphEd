import { Neighbors } from "./Neighbors";
import { GraphInterface } from "../GraphInterface";
import { Edge } from "./Edge";
export declare class DirectedGraph implements GraphInterface {
    vertices: {
        [vertex_name: string]: Neighbors | null;
    };
    constructor();
    addVertex: (name: string) => void;
    addEdge: (v1_name: string, v2_name: string, weigth?: number) => void;
    removeEdge: (v1_name: string, v2_name: string) => Edge;
    edgesListFromVertice: (name: string) => Edge[];
    removeVertex: (name: string) => void;
    updateEdge: (v1_name: string, v2_name: string) => void;
    verticesNameList: () => string[];
    numberOfVertices: () => number;
    display: () => void;
}
