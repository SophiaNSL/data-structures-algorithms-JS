// Given a graph of users and their connectins, find the smallest distance between two users
class Node {
    constructor(value){
        this.value = value;
        this.edgesList = [];
    }

    connect(node){
        this.edgesList.push(node);
        node.edgesList.push(this);
    }

    getAdjacnetNodes(){
        return this.edgesList;
    }

    isConnected(node){
        return !!this.edgesList.find(edge => edge.value === node.value)
    }
}

class Graph {
    constructor(nodes){
        this.nodes = [...nodes];
    }

    addToGraph(node){
        this.nodes.push(node);
    }

    reconstructPath(visitedNodes, startNode, endNode){
        let currNode = endNode;
        let shortestPath = [];
        while(currNode !== null){
            shortestPath.push(currNode);
            currNode = visitedNodes[currNode.value];
        }
        return shortestPath.reverse();
    }

    breadthFirstTraversal(start, end){
        const queue = [start];
        const visitedNodes = {};
        visitedNodes[start.value] = null;

        while(queue.length > 0){
            let node = queue.shift();

            if(node.value === end.value){
                console.log('Found it!');
                return this.reconstructPath(visitedNodes, start, end);
            }

            for(let adjacency of node.edgesList){
                if (!visitedNodes.hasOwnProperty(adjacency.value)){
                    visitedNodes[adjacency.value] = node;
                    queue.push(adjacency);
                    console.log(adjacency.value);
                }
            }
        }
    }
    
}

const Hannah = new Node('Hannah');
const Mary = new Node('Mary');
const Max = new Node('Max');
const Mel = new Node('Mel');
const Dan = new Node('Dan');
const Nis = new Node('Nis');
const Chris = new Node('Chris');
const Nicolette = new Node('Nicolette');
const Yair = new Node('Yair');
const Mabel = new Node('Mabel');
const Liz = new Node('Liz');

const graph = new Graph([Hannah,Mary,Max,Mel,Dan,Nis,Chris,Nicolette,Yair,Mabel,Liz]);

Hannah.connect(Mary);
Hannah.connect(Max);
Hannah.connect(Mel);
Hannah.connect(Nis);
Hannah.connect(Liz);
Mel.connect(Max);
Nis.connect(Dan);
Nis.connect(Yair);
Nis.connect(Chris);
Chris.connect(Yair);
Chris.connect(Nicolette);
Yair.connect(Mabel);
Yair.connect(Liz);
Mabel.connect(Liz);

console.log(graph.breadthFirstTraversal(Hannah, Mabel));
console.log(graph.breadthFirstTraversal(Nicolette, Liz));
