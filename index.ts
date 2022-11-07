/**
 * Asteroid Generator
 * 
 * randomly generates points in 3-space which can be used to draw asteroids
 */

import { cartesianToSpherical, sphericalToCartesian } from "./helpers/spherical-coordinates.js";

import tetrahedron from "./platonics/tetrahedron.js";
import cube from "./platonics/cube.js";



function generate(
    pointCount: 4 | 8
) {
    let points = [];

    switch (pointCount) {
        case 4:
            points = tetrahedron.points;
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
                    radius,
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


for (let i = 0; i < 5; i++) {
    const pts = generate(8);

    console.log(
        cube._faces.map(
            face => face.map(
                ptIdx => pts[ptIdx]
            ).reverse()
        )
    );
}