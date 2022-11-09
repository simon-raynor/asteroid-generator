import { cartesianToSpherical, sphericalToCartesian } from "./helpers/spherical-coordinates";

type Point = [number, number, number];

// edge containes pairs of *inidices* (of points)...
type Edge = [number, number];

// ...as do faces
type Face = Array<number>;

export default class Polyhedron {
    _points: Array<Point>
    _edges: Array<Edge>
    _faces: Array<Face>

    constructor(
        points: Array<Point>,
        edges: Array<Edge>,
        faces: Array<Face>
    ) {
        this._points = points;
        this._edges = edges;
        this._faces = faces;
    }

    get points(): Array<Point> {
        return this._points.slice();
    }

    log() {
        const { points } = this;

        const rads = (theta: number) => `${
            Math.round(100000 * theta / Math.PI) / 100000
        }π`;

        console.log(
            points,
            cartesianToSpherical(points).map(
                ([r, i, a]) => [`${r} (${r * r})`, rads(i), rads(a)]
            )
        );
    }
}

