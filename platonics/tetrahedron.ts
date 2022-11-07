import toUnitSphere from "../helpers/toUnitSphere";
import Polyhedron from "../Polyhedron";

//
//   y+ z+
//    \ |
//     \|
//      o----x+
//
//     2-----0
//    / \   /
//   /   \ /
//  3-----1
//

const points: Array<[number, number, number]> = [
    [1, 1, 1],
    [1, -1, -1],
    [-1, 1, -1],
    [-1, -1, 1]
];


const edges: Array<[number, number]> = [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [1, 3],
    [2, 3]
];


const faces = [
    [0, 1, 2],
    [0, 1, 3],
    [0, 2, 3],
    [1, 2, 3],
];


export default new Polyhedron(
    toUnitSphere(
        points
    ),
    edges,
    faces
);