interface Point{
    x: number,
    y: number,
    z: number
}
interface Point{
    xyz: string
}
function showCoords(obj: Point){
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z} | ${obj.xyz}`)
}
let objCoords: Point = {
    x: 10, y:15, z:4, xyz: "Sim"
}
showCoords(objCoords)

