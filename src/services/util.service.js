'use strict';

export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  fixTimestamp,
  getRandomColor,
  storeToStorage,
  loadFromStorage,
  getRandomInt,
  getRandomId,
  financial,
  numberWithCommas,
  fixTimestampChart,
  stringToColour,
}

function makeId(length = 6) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function makeLorem(size = 100) {
  var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
  var txt = '';
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  return txt;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function fixTimestamp(timestamp) {
  var day = new Date(timestamp).getDate();
  if (day < 10) day = '0' + day;
  var month = new Date(timestamp).getMonth() + 1;
  if (month < 10) month = '0' + month;
  var year = new Date(timestamp).getFullYear();
  const date = day + '/' + month + '/' + year;
  const time = new Date(timestamp).toTimeString().substring(0, 5);
  return date + ' at ' + time;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function storeToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null);
}
function loadFromStorage(key) {
  let data = localStorage.getItem(key);
  return (data) ? JSON.parse(data) : undefined;
}


function getRandomId() {
  var pt1 = Date.now().toString(16);
  var pt2 = getRandomInt(1000, 9999).toString(16);
  var pt3 = getRandomInt(1000, 9999).toString(16);
  return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function getRandomInt(num1, num2) {
  var max = (num1 >= num2) ? num1 + 1 : num2 + 1;
  var min = (num1 <= num2) ? num1 : num2;
  return (Math.floor(Math.random() * (max - min)) + min);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function financial(x, f) {
  return Number.parseFloat(x).toFixed(f)

}

function stringToColour(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

function fixTimestampChart(timestamp) {
  var day = new Date(timestamp).getDate();
  if (day < 10) day = '0' + day;
  var month = new Date(timestamp).getMonth() + 1;
  if (month < 10) month = '0' + month;
  var year = new Date(timestamp).getFullYear();
  const date = day + '/' + month + '/' + year;
  const time = new Date(timestamp).toTimeString().substring(0, 5);
  return day + '/' + month;
}