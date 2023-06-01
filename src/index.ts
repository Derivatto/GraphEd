import { DirectedGraph } from "./AdjList/classes/DirectedGraph";

const main = () => {
    let grafo = new DirectedGraph()
    grafo.addVertex('1')
    grafo.addVertex('2')
    grafo.addVertex('3')
    grafo.addEdge('1','2')
    grafo.addEdge('1','3')

    grafo.display()
}

main()