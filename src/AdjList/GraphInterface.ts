// import { Vertex } from "./classes/Vertex";
import { Edge } from "./classes/Edge";

export interface GraphInterface {
    addVertex: (name: string) => void;
    removeVertex: (name: string) => void;
    addEdge: (v1_name: string, v2_name: string, weigth?: number) => void;
    removeEdge: (v1_name: string, v2_name: string) => Edge;
    updateEdge: (v1_name: string, v2_name: string) => void;
    // verticesList: () => Vertex[];
    verticesNameList: () => string[];
    edgesListFromVertice: (name: string) => Edge[];
    numberOfVertices: () => number;
    display: () => void;
}

