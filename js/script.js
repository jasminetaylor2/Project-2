/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;                                 //represents the number items to show on each page
                                                   //this function should hide all students expect 10 you want on given page

const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage; //starting point for the index '0'
   let endIndex = page * itemsPerPage;                   //ending point for index '10' 
   for (let i = 0; i < list.length; i += 1) {                 //for loop to run thru entire student list items'li'
      if (i >= startIndex && i < endIndex) {           //conditional statement that removes all list items from page
         list[i].style.display = "block";              //these manipulate the DOM list items on the page using CSS 'display'to show the element 
      } else {
         list[i].style.display = "none";            //these manipulate the DOM list items on the page using CSS 'display'to hide the element 
      }
   }
}
//teaches how to manipulate items on the DOM/html page
showPage(studentList, 1);                          // show the firrst 10 student on list



const appendPageLinks = (list) => {
   let numOfPages = Math.ceil(list.length / itemsPerPage);        //formula to determine how many pages let numOfPages 
   let pageClass = document.querySelector('.page');           //variable that hold the div with the name '.page'
   let createDiv = document.createElement('div');             //creates div element 
   createDiv.className = "pagination";                          //gives the new div the class name 'pagination'
   pageClass.appendChild(createDiv);                            // appends to page div
   let ul = document.createElement('ul');                       //create ul variable
   createDiv.appendChild(ul);                                   //append ul to div element with pagination link 


   for (let i = 1; i <= numOfPages; i += 1) {                // loop over every page link
      let li = document.createElement('li');                  // creates a list item
      let a = document.createElement('a');                      // creates an anchor elements

      li.appendChild(a);                           //append new created anchor element to be nested within li
      ul.appendChild(li);                          // nest list elements within unorderlist

      a.textContent = i;                           // sets the text content of link to equal the index value
      a.href = '#';                                // set the text of the anchor element 

      if (i === 1) {                               // sets the page to 1
         a.className = 'pagination active';        //set the anchor class name
      }

      a.addEventListener('click', (event) => {       // adds an event listner to the anchor tag
         let clicked = event.target;             // sets the variable of click to the event target
         let pagLinks = document.querySelectorAll('.pagination'); //sets the vairable to all the elements with pagination class name
         showPage(list, i);                              // calls the function showPage  

         for (let index = 0; index < pagLinks.length; index++) { // loops over pagination links
            let theLinks = pagLinks[index];
            theLinks.setAttribute('class', 'pagination');      //when not clicked makes pagination button unactive
         }
         clicked.setAttribute('class', "pagination active");   //when clicked it makes active

      });
   }
}

appendPageLinks(studentList);                   //calls the funtion to append the page






