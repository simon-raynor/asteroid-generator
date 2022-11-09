import Polyhedron from "../Polyhedron";

//
//   y+ z+ x+
//    \ | /
//     \|/
//      o
//
//     0
//    /|\
//   / / \
//  2-|-\-1
//  | /  ||
//  ||   \|
//  3-----4
//   \   /
//    \ /
//     5
//

const points: Array<[number, number, number]> = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0],
    [-1, 0, 0],
    [0, -1, 0],
    [0, 0, -1]
];


const edges: Array<[number, number]> = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 2], [1, 4], [1, 5],
    [2, 3], [2, 5],
    [3, 4], [3, 5],
    [4, 5]
];


const faces = [
    [0, 2, 1], [0, 3, 2], [0, 4, 3], [0, 1, 4],
    [1, 2, 5], [2, 3, 5], [3, 4, 5], [4, 1, 5]
];


export default new Polyhedron(
    points,
    edges,
    faces
);