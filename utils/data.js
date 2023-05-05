const usernames = [
  "Michael",
  "Kobe",
  "Lebron",
  "Gary",
  "Kemp",
  "Larry",
  "Magic",
  "Chris",
  "Shaq",
];

const thoughts = [
  "Hey! Hey! Hey!",
  "Watch me whip!",
  "Watch me nae nae",
  "Teach me how to dougie!",
  "Yeah Buddy!",
];

const reactions = ["Good", "Bad", "Meh", "LOL", "Okay", "Nice"];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets random thought
const getRandomThought = () => `${getRandomArrItem(thoughts)}`;

// Gets random username
const getRandomUserName = () =>
  `${getRandomArrItem(usernames)}${Math.floor(Math.random() * 10 + 1)}`;

//Gets random reaction

const getRandomReaction = () => `${getRandomArrItem(reactions)}`;
// Export the functions for use in seed.js
module.exports = { getRandomThought, getRandomUserName, getRandomReaction };