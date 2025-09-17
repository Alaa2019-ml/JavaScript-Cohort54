/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const ul = document.querySelector('ul').children;
ul[0].textContent = 'Alooy';
ul[1].textContent = 'Burgers';
ul[2].textContent = 'Dongen';

const arr = Array.from(ul);
arr.forEach((ele) => (ele.className = 'list-item'));
