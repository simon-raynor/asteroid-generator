const {
    sin,
    cos,
    sqrt,
    atan,
    acos,
    PI
} = Math;

export function cartesianToSpherical(
    cartesian: Array<[number, number, number]>,

    // radiusOverride is only useful if we **know** that
    // all the points are arranged a fix distance from the
    // origin
    radiusOverride?: number
): Array<[number, number, number]> {
    return cartesian.map(
        ([x, y, z]) => {
            // TODO: test that a truthy || avoids the sqrt 
            const radius = radiusOverride || sqrt((x*x) + (y*y) + (z*z));

            let inclination = atan(y/x);

            if (x < 0) {
                //quadrant II & III
                inclination += PI;
            } else if (y < 0) {
                // quadrant IV
                inclination += PI * 2;
            }

            const azimuth = acos(z/radius);
    
            return [radius, inclination, azimuth];
        }
    )
}

export function sphericalToCartesian(
    spherical: Array<[number, number, number]>,
    radiusOverride?: number
): Array<[number, number, number]> {
    return spherical.map(
        ([r, inclination, azimuth]) => {
            const radius = radiusOverride || r;

            return [
                radius * sin(azimuth) * cos(inclination),
                radius * sin(inclination) * sin(azimuth),
                radius * cos(azimuth)
            ]
        }
    )
}