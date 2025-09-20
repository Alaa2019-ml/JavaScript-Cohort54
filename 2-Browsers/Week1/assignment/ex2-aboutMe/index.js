/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const ul = document.querySelector('ul').children;
const nickname = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');

nickname.textContent = 'Alooy';
favFood.textContent = 'Burgers';
hometown.textContent = 'Dongen';

const arr = Array.from(ul);
arr.forEach((ele) => (ele.className = 'list-item'));
