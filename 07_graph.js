// Section One: vertices list + edges list

const vertices1 = ['A', 'B', 'C', 'D', 'E'];

const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E']
];

//findAdjacencies
const findAdjacencies1 = (node) => {
    const adjacentNodes1 = [];

    for (let edge of edges) {
       if(edge.indexOf(node) > -1){
           let adjacentNode1 = edge.indexOf(node) === 0 ? edge[1] : edge[0];
           adjacentNodes1.push(adjacentNode1);
       }
    }

    return adjacentNodes1;   
}

//is connected

const isConnected1 = (node1, node2) => {
    return edges.some(edge => {
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
    });
}

console.log(findAdjacencies1('D'));
console.log(isConnected1('E','D'));


// Section Two: Adjacency Matrix

const vertices2 = ['A', 'B', 'C', 'D', 'E'];

const vertexIdxs = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4
};

const adjacencyMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]

];

// find adjacencies
const findAdjacencies2 = (node) => {
    let adjacentNodes2 = [];
    let nodeVertex = vertexIdxs[node];

    for( let i = 0; i < vertices2.length; i++){
       if(adjacencyMatrix[nodeVertex][i] === 1){
           adjacentNodes2.push(vertices2[i]);
       }
    }

    return adjacentNodes2;
}

//is connected
const isConnected2 = (node1, node2) => {
    const nodeIdx1 = vertexIdxs[node1];
    const nodeIdx2 = vertexIdxs[node2];

    return !!adjacencyMatrix[nodeIdx1][nodeIdx2];
}


console.log(findAdjacencies2('D'));
console.log(isConnected2('C','D'));

// Section Three: Adjacency List

class Node {
    constructor(value){
        this.value = value;
        this.edgesList = [];
    }

    connect(node){
        this.edgesList.push(node);
        node.edgesList.push(this);
    }

    //find adjacencies
    findAdjacencies3(){
        return this.edgesList.map(edge => edge.value);
    }

    //is connected
    isConnected3(node){
        return this.edgesList.some( edge => edge.value.indexOf(node.value) > -1);
    }

}

class Graph {
    constructor(nodes){
        this.nodes = [...nodes]
    }

    addToGraph(node){
        this.nodes.push(node);
    }
}

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

// for(let node of graph.nodes){
//     console.log(`Node ${node.value}`);
//     for(let connectedNode of node.edgesList){
//         console.log(`Node ${node.value} is connected to ${connectedNode.value}`);
//     }
// }

console.log(nodeD.findAdjacencies3());
console.log(nodeB.isConnected3(nodeD));