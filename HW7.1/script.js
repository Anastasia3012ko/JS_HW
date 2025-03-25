//1
const user = {
    name: 'Anastasia',
    age: 40,
}
console.log(user)

//2
const One = {
    author: 'Alexander Dumas',
    names: ['The Count of Monte Cristo','Twenty years after','The three musketeers']
}
const Two = {
    author: 'Aleksander Pushkin',
    names: 'Fairy Tails'
}
const Three = {
    author: 'kdsjhsifs',
    name: 'djuisfhs',
}
console.log([One,Two,Three]) 

//3
const rectangle = { 
    a: 10,
    b: 35
}
rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);
console.log(rectangle)

//4
let fruit = [
    {name: 'apple', color: 'red'},
    {name: 'banana', color: 'yellow'},
    {name: 'pear', color: 'green'},
    {name: 'garnet', color: 'red'},
    {name:'orange', color: 'orange'},
    {name: 'watermelon', color: 'green'},
    {name: 'dragonfruit', color: 'red'},
]
for(let i = 0; i < fruit.length; i++){ 
    for(let color in fruit[i]){
       if(fruit[i].color === 'red') console.log(fruit[i])
    }
}

//5
// const playlist = new Array(7);
// playlist[0] = {name:'Last Christmas', performer: 'Джордж Майкл', year: 1984}
// playlist[1] = {name:'We Wish You a Merry ChristmasLast Christmas', performer: 'Артур Уоррелл', year: 1935}
// playlist[2] = {name:'Jingle Bells', performer: 'Джеймс Лорд Пирпонт', year: 1851}
// playlist[3] = {name:'All I Want for Christmas Is You', performer: 'Мэрай Кэри', year: 1994}
// playlist[4] = {name:'Santa Claus Is Coming to Town', performer: 'Хейвен Гиллеспи', year: 1934}
// playlist[5] = {name:'Happy New Year', performer: 'ABBA', year: 1980}
// playlist[6] = {name:'Let It Snow!', performer: 'Сэмми Кан', year: 1945}
// console.log(playlist)
const playlist = [
  {name:'Last Christmas', performer: 'Джордж Майкл', year: 1984},
  {name:'We Wish You a Merry ChristmasLast Christmas', performer: 'Артур Уоррелл', year: 1935},
  {name:'Jingle Bells', performer: 'Джеймс Лорд Пирпонт', year: 1851},
  {name:'Santa Claus Is Coming to Town', performer: 'Хейвен Гиллеспи', year: 1934},
  {name:'Happy New Year', performer: 'ABBA', year: 1980},
  {name:'Let It Snow!', performer: 'Сэмми Кан', year: 1945}
]
//   for(let i = 0; i < playlist.length; i++) {
//       console.log(playlist[i])
// }

function display(song) {
    console.log(song.name,song.performer,song.year)
}
for(let i = 0; i < playlist.length; i++){
    display(playlist[i])
}

 


