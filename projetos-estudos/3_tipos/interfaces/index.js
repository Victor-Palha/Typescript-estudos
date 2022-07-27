"use strict";
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z} | ${obj.xyz}`);
}
let objCoords = {
    x: 10, y: 15, z: 4, xyz: "Sim"
};
showCoords(objCoords);
