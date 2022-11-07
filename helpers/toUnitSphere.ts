//
// forces an array of points in 3-space
// on to the surface of a unit sphere
//

import { cartesianToSpherical, sphericalToCartesian } from "./spherical-coordinates";

export default function toUnitSphere(
    points: Array<[number, number, number]>
): Array<[number, number, number]> {
    return sphericalToCartesian(
        cartesianToSpherical(points),
        1
    );
}