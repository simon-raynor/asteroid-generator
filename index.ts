/**
 * Asteroid Generator
 * 
 * randomly generates points in 3-space which can be used to draw asteroids
 */

import { cartesianToSpherical, sphericalToCartesian } from "./helpers/spherical-coordinates.js";

import tetrahedron from "./platonics/tetrahedron.js";
import cube from "./platonics/cube.js";
import octahedron from "./platonics/octahedron.js";



export function generate(
    pointCount: 4 | 6 | 8,
    radiusOverride: number = 1
) {
    let points = [];

    switch (pointCount) {
        case 4:
            points = tetrahedron.points;
            break;
        case 6:
            points = octahedron.points;
            break;
        case 8:
            points = cube.points;
            break;
    }

    const spherical = cartesianToSpherical(points);

    const maxVariance = Math.PI / (pointCount * 2);

    return sphericalToCartesian(
        spherical.map(
            ([radius, inclination, azimuth]) => {
                return [
                    radiusOverride || radius,
                    inclination + (maxVariance * random1()),
                    azimuth + (maxVariance * random1())
                ];
            }
        )
    );
}

function random1() {
    return 2 * (0.5 - Math.random());
}