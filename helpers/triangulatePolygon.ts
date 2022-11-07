//
// convert a convex n-gon with clockwise points
// into a series of clockwise triangles
//


//
//       A-----B
//      ;       \
//     ;         \
//    F           C
//     \         /
//      \       /
//       E-----D
//
// [
//   [A, B, C],
//   [A, C, D],
//   [A, D, E],
//    ...
//   [A, n - 1, n]
// ]
//


export default function triangulatePolygon(
    points: Array<number>
): Array<[number, number, number]> {

    const triangles = [];

    let A = points.shift();

    for (let i = 1; i < points.length; i++) {
        triangles.push([
            A,
            points[i - 1],
            points[i]
        ])
    }

    return triangles;
}
