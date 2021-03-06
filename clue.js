// OBJECTS FOR ALL THE SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: "#448c4a",
  description: 'He has a lot of connections',
  age: 45,
  favouriteWeapon: "",
  image: './assets/green.png',
  occupation: 'Entrepreneur',
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#8b539a',
  description: 'He talks much but say little',
  age: 45,
  favouriteWeapon: "",
  image: './assets/plum.png',
  occupation: 'Visting STEM professor',
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#ff8d48',
  description: 'She can stare down a lion',
  age: 30,
  favouriteWeapon: "",
  image: './assets/scarlet.png',
  occupation: 'Manager of the Batman Zoo',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#7775c0',
  description: 'She is stronger than you',
  age: 37,
  favouriteWeapon: "",
  image: './assets/peacock.png',
  occupation: 'Yoga teacher',
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#e6b127',
  description: "He was part of Franco's gang",
  age: 73,
  favouriteWeapon: "",
  image: './assets/mustard.png',
  occupation: 'Colonel',
}

const mrsWhite = {
  firstName: 'Rose',
  lastName: 'White',
  color: '#e1d2a9',
  description: 'She will not miss one thing',
  age: 63,
  favouriteWeapon: "",
  image: './assets/white.png',
  occupation: 'Facility consultant',
}

// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  weight: 10,
  id: "rope",
  image: './assets/rope.png'
}

const knife = {
  name: 'Knife',
  weight: 2,
  id: "knife",
  image: './assets/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  weight: 10,
  id: "candlestick",
  image: './assets/candlestick.png'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 16,
  id: "dumbbell",
  image: './assets/dumbell.png'
}

const poison = {
  name: 'Bottole of Poison',
  weight: 0.1,
  id: "poison",
  image: './assets/poison.png'
}

const axe = {
  name: 'Axe',
  weight: 5,
  id: "axe",
  image: './assets/axe.png'
}

const bat = {
  name: 'Bat',
  weight: 8,
  id: "Bat",
  image: './assets/bat.png'
}

const trophy = {
  name: 'Trophy',
  weight: 8,
  id: "trophy",
  image: './assets/trophy.png'
}

const pistol = {
  name: 'Pistol',
  weight: 3,
  id: "pistol",
  image: './assets/pistol.png'
}

// OBJECTS FOR ALL THE ROOMS

const diningRoom = {
  name: 'Dining Room',
  image: './assets/dining.png'
}

const conservatory = {
  name: 'Conservatory',
  image: './assets/conservatory.png'
}

const kitchen = {
  name: 'Kitchen',
  image: './assets/kitchen.png'
}

const study = {
  name: 'Study',
  image: './assets/study.png'
}

const library = {
  name: 'Library',
  image: './assets/library.png'
}

const billiardRoom = {
  name: 'Billiard Room',
  image: './assets/ball.png'
}

const lounge = {
  name: 'Lounge',
  image: './assets/lounge.png'
}

const ballroom = {
  name: 'Ballroom',
  image: './assets/ballroom.png'
}

const hall = {
  name: 'Hall',
  image: './assets/hall.png'
}

const spa = {
  name: 'Spa',
  image: './assets/spa.png'
}

const livingRoom = {
  name: 'Living Room',
  image: './assets/livingroom.jpg'
}

const observatory = {
  name: 'Observatory',
  image: './assets/observatory.png'
}

const theater = {
  name: 'Theater',
  image: './assets/theater.png'
}

const guestHouse = {
  name: 'Guest House',
  image: './assets/guesthouse.png'
}

const patio = {
  name: 'Patio',
  image: './assets/patio.png'
}

//GROUPING ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.

const mysteryobject = {
  killer: null,
  weapon: null,
  room: null,
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show selected elements
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = `${mystery.killer.image}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerDescription').innerHTML = `Description: ${mystery.killer.description}`
 
  mystery.killer.favouriteWeapon = shuffleFavouriteWeapon()
  document.getElementById("killerFavouriteWeapon").innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`
}

document.getElementById('killerCard').addEventListener('click', pickKiller)

// CREATE FUNCTIONS pickWeapon 

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`
  document.getElementById("weaponWeight").innerHTML = `Weight: ${mystery.weapon.weight} kilos`
  document.getElementById("weaponImage").src = mystery.weapon.image
}

document.getElementById('weaponCard').addEventListener('click', pickWeapon)


// CREATE FUNCTIONS pickRoom 

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById("roomName").innerHTML = `${mystery.room.name}`
  document.getElementById("roomImage").src = mystery.room.image
}

document.getElementById('roomCard').addEventListener('click', pickRoom)


// Shuffle killers favourite weapon
const shuffleFavouriteWeapon = () => randomSelector(weapons).id


// CREATE A FUNCTION revealMystery that will be invoked when you click that button. 

const revealMystery = () => {
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    alert("No mystery is yet to be revealed!")
  } else {
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, a ${mystery.killer.age} years old ${mystery.killer.occupation}, in the ${mystery.room.name} with a ${mystery.weapon.name} - Shocking!`
  }
}
