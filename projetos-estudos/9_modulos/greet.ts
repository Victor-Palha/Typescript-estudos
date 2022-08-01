// 1 - Exportação de arquivos
function importGreet(){
    console.log("Essa função foi exportada!")
}
//Primeiro tipo de exportação
export default importGreet
//Ou...
/*  Colocar o export default antes da função/obj/classe/etc...
export default function importGreet(){
    console.log("Essa função doi exportada!")
}
*/