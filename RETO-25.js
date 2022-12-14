/* Ayer, en noche buena, una fam铆lia cen贸 por todo lo alto... Con tanta copa 馃嵕 encima todav铆a no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 馃惌, que vi贸 ayer el fest铆n escondido,
est谩 relami茅ndose los bigotes al ver todos los manjares que hay en el comedor.

Eso s铆, hay que tener cuidado 馃樁 y s贸lo hacer los movimientos correctos para comer algo.
Por eso, el rat贸n, que se ha visto los v铆deos de midudev,
va a crear una funci贸n para saber si su pr贸ximo movimiento es correcto o no 鉁?.

El ratoncillo se puede mover en 4 direcciones: up, down, left,
right y el comedor es una matriz (un array de arrays) donde cada posici贸n puede ser:

Un espacio vac铆o es que no hay nada
Una m es el rat贸n
Un * es la comida
Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false

隆Ten en cuenta que el rat贸n quiere buscar comida en diferentes habitaciones
y que cada una puede tener dimensiones diferentes! */

function canMouseEat(direction, game) {
  const MOUSE = 'm'
  const FOOD = '*'

  //Buscamos al raton para saber en que array y en que indice se encuentra
  const mouseIndex = (gameArray) => {
    const index = gameArray.findIndex((element) => element.includes(MOUSE))
    if (index === -1) return false
    return { x: index, y: gameArray[index].indexOf(MOUSE) }
  }

  const mouseIndexPosition = mouseIndex(game)
  const checkFood = (mouseObj) => {
    //Modificamos el array segun la direccion
    switch (direction) {
      case 'up':
        mouseObj.x -= 1
        break
      case 'down':
        mouseObj.x += 1
        break
      case 'left':
        mouseObj.y -= 1
        break
      default:
        mouseObj.y += 1
        break
    }

    // Estamos intentando buscar la comida en una posicion inexistente?
    if (mouseObj.x < 0 || mouseObj.y > game.length - 1) return false
    // Buscamos la comida si encontramos cualquier otra cosa entonces FALSE
    if (game[mouseObj.x][mouseObj.y] !== FOOD) return false
    // Si no retornamos TRUE
    return true
  }

  return checkFood(mouseIndexPosition)
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
]

canMouseEat('up', room) // false
canMouseEat('down', room) // true
canMouseEat('right', room) // false
canMouseEat('left', room) // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
]

canMouseEat('up', room2) // false
canMouseEat('down', room2) // false
canMouseEat('right', room2) // true
canMouseEat('left', room2) // false
