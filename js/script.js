/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;                                 //represents the number items to show on each page

console.log(studentList);

//this function should hide all students expect 10 you want on given page
 const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage; //starting point for the index '0'
   let endIndex = page * itemsPerPage;                   //ending point for index '10' 
   for (let i = 0; i < list.length; i += 1) {                 //for loop to run thru entire student list items'li'
      if (i >= startIndex && i < endIndex) {           //conditional statement that removes all list items from page
         list[i].style.display = "block";              //these manipulate the list items on the page using CSS 'display'to show the element 
      } else {
         list[i].style.display = "none";            //these manipulate the list items on the page using CSS 'display'to hide the element 
      }
   }
} 

showPage(studentList, 1);



const appendPageLinks = (list) => {
   var numOfPages = Math.ceil(list.length/itemsPerPage);        //formula to determine how many pages let numOfPages 
   const pageClass = document.querySelector('.page');           //variable that hold the div with the name '.page'
   const createDiv = document.createElement('div');             //creates div element 
   createDiv.className = "pagination";                          //gives the new div the class name 'pagination'
   pageClass.appendChild(createDiv);                            // appends to page div
   let ul = document.createElement('ul');                       //create ul variable
   createDiv.appendChild(ul);                                   //append ul to div element with pagination link 


    for (let i = 1; i <= numOfPages; i += 1) {                // loop over every page link
      let li = document.createElement('li');                  // creates a list item
      let a = document.createElement('a'); 
                         // creates an anchor elements
      li.appendChild(a);
      ul.appendChild(li);
   
      a.textContent = i;
      a.href = '#';

            if (i === 1)
            {
               a.className = 'pagination active';
            }

      a.addEventListener('click', (event) => {
         const clicked = event.target;
         const pagLinks = document.querySelectorAll('.pagination');
         showPage(list, i);

         for (let index = 0; index < pagLinks.length; index++) {
            let theLinks = pagLinks[index];
            theLinks.setAttribute('class', 'pagination');      //when not clicked makes it unactive
         }
         clicked.setAttribute('class', "pagination active");   //when clicked it makes active

         });
      }
   }

   appendPageLinks(studentList);

   
      
   //    let page1 = document.getElementsByTagName(a).innerHTML + "<a href = '#' >numOfPages </a>";
   //    document.getElementsByTagName(a).innerHTML += "<a href = '#' > numOfPages </a>";
   //    document.getElementsByTagName(a).innerHTML += "<a href = '#' > 'numOfPages </a>";
   //    document.getElementsByTagName(a).innerHTML += "<a href = '#' > numOfPages </a>";
   //    document.getElementsByTagName(a).innerHTML += "<a href = '#' > numOfPages </a>";

   //    page1.className = 'active';
   //}      //for(let p = 0; p < list.length; p ++ ){
    //  document.getElementsByTagName(a).innerHTML += "<a href = '#' >2</a> ;





  //  createDiv.getElementsByClassName('.pagination').appendChild(ul);

// Remember to delete the comments that came with this file, and replace them with your own code comments.