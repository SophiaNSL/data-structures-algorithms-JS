//BFS 
// time complexity O(v+e)
// space complexity O(v)

class Node {
    constructor(value){
        this.value = value;
        this.edgesList = [];
    }

    connect(node){
        this.edgesList.push(node);
        node.edgesList.push(this);
    }

    getAdjacentNodes(){
        return this.edgesList;
    }

    isConnected(node){
        return !!this.edgesList.find(edge => edge.value === node.value);
    }
}

class Graph {
    constructor(nodes){
        this.nodes = [...nodes];
    }

    addToGraph(node){
        this.nodes.push(node);
    }

    breadthFirstTraversal(start, end){
        const queue = [start];
        const visitedNodes = new Set();
        visitedNodes.add(start);

        while(queue.length > 0){
            //pull node queue to visit
            //add its adjacencies to the queue
            const node = queue.shift();

            if(node.value === end.value){
                console.log('Found it!');
                return
            }

            for(let adjacency of node.edgesList){
                if(!visitedNodes.has(adjacency)){
                    queue.push(adjacency);
                    visitedNodes.add(adjacency);
                }
            }
            console.log(node.value);
        }
    }
}

const DFW = new Node('DFW');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const BOS = new Node('BOS');
const JFK = new Node('JFK');
const EWR = new Node('EWR');
const SAN = new Node('SAN');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');

const graph = new Graph(['DFW','LAX','HNL','BOS','JFK','EWR','SAN','MIA','MCO','PBI']);

DFW.connect(JFK);
DFW.connect(LAX);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MIA.connect(PBI);
MCO.connect(PBI);

graph.breadthFirstTraversal(DFW,MIA);





