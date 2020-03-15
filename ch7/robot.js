// File: robot.js
const { inspect } = require('util');
const dump = (item) => {
    console.log(`${inspect(item, {"colors": true})}`);
};

// The list of connected locations (via 'roads')
const roads = [
    'Alice-Bob',
    'Alice-Cabin',
    'Alice-Post',
    'Bob-Townhall',
    'Daria-Ernie',
    'Daria-Townhall',
    'Ernie-Grete',
    'Grete-Farm',
    'Grete-Shop',
    'Marketplace-Farm',
    'Marketplace-Post',
    'Marketplace-Shop',
    'Marketplace-Townhall',
    'Shop-Townhall'
];

// The above array is not easy to work with when trying to navigate. Instead,
// we will organize this as a set objects where the key is the location, and the
// value contains that list of connected destinations.
// {
//     "Alice": ["Bob", "Cabin", "Post"],
//     "Bob": ["Alice", "Townhall"],
//     ...
// }
function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

// A parcel has a current 'place' and a target 'address'
// {place: "Alices", address: "Bobs"}
//
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        // If there is no path to destinaation from the
        // current location just return
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }

        // 1) Update parcels to reflect their new current location of 'destination'.
        //     If a parcels 'place' was its old location (this.place) update it
        //     to 'destination' but keep the associated target 'address'.
        // 2) Then filter any parcels that are intended for the 'destination'
        let parcels = this.parcels.map(p => {
            if (p.place != this.place) {
                return p;
            } else {
                return {place: destination, address: p.address};
            }
        }).filter(p => p.place != p.address);

        return new VillageState(destination, parcels);
    }
}

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    } 
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

// A static method (written here by directly adding a property to the constructor)
// to create a new 'state' with some parcels
VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post", parcels);
}



dump(roads);
dump(roadGraph);

let first = new VillageState("Post", [{place: "Post", address:"Alice"}]);
dump(first);
let next = first.move("Alice");
dump(next);

runRobot(VillageState.random(10), randomRobot);