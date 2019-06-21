/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.getElementsByTagName('li'); //variable to hold the list of students contained in list
const itemsPerPage = 10;                                 //represents the number items to show on each page


//const currentPage = 1; //re the curent page 
//logs the list of items in LI

//this fucntion should hide all students expect 10 you want on given page
// function showPage(list, page) {
//   let startIndex = (page * itemsPerPage) - 10;//each page will give items 1-10,11-20,21-30,31-40,41-50,51-54 //endIndex - 9
//    let endIndex = page * itemsPerPage;
//     for (let i = 0; list >= list.length; i += 1) ;

//  }
//
//for(i = 0; list; < startIndex.length; i++){
//  startIndex[i].addEventListener("click", () => {
//        this.parentElement.style.display = 'none' ;
//     });
//var list = document.getElementsByTagName('ul')[0];

// list.addEventListener('click', function(e) {
//    if (e.target.tagName == 'BUTTON') {

//    }
//  }); }


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage; //starting point for the index '0'
   let endIndex = page * itemsPerPage;                   //ending point for index '10' 
   for (let i = 0; i < list.length; i += 1) {                 //for loop to run thru entire student list items'li'
      if (i >= startIndex && i < endIndex) {           //conditional statement that removes all list items from page
         list[i].style.display = "block";              //these manipulate the list items on the page using CSS 'display'to either hide or show the element 
      } else {
         list[i].style.display = "none";            //these manipulate the list items on the page using CSS 'display'to either hide or show the element 
      }
   }

}

showPage(studentList,1);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   let numOfPages = Math.ceil(list /itemsPerPage);        //formula to determine how many pages let numOfPages =
   let createDiv = document.createElement('div');               //creates div element 
   createDiv.className = "pagination";                          //gives the new div the class name 'pagination'

   let pageClass = document.querySelectorAll('.page');             //variable that hold the div with the name '.page'
   pageClass.appendChild(createDiv);                            // appends to page div

   // let ul = document.createElement('ul');                        //create ul variable
   // //ul.className = "unorderedList";
   // createDiv.appendChild(ul);                                   //append ul to div element with pagination link


//    for (let i = 1; i < numOfPages; i += 1) {                // loop over every page link

//       let li = document.createElement('<li>');              // creates a list item
//       let a = document.createElement('<a>');                // creates an anchor elements
//       li.className = "list-links";
//       a.className = "links";
// const pageLinks = document.querySelectorAll('.links');
// pageLinks.innerHTML = 'href = "#" + Page 1';
      
//    document.getElementsByTagName(a).innerHTML += "<a href = '#' > numOfPages </a>";
     
      // a.href = "#";
      // a.textContent = " ";
      // ul.appendChild(list-links);                        //to nest new <a> elements in <li> elements
      
   //    let page1 = document.getElementsByTagName(a).innerHTML + "<a href = '#' >numOfPages </a>";
   //    document.getElementsByTagName(a).innerHTML += "<a href = '#' > numOfPages </a>";
   //    document.getElementsByTagName(a).innerHTML += "<a href = '#' > 'numOfPages </a>";
   //    document.getElementsByTagName(a).innerHTML += "<a href = '#' > numOfPages </a>";
   //    document.getElementsByTagName(a).innerHTML += "<a href = '#' > numOfPages </a>";

   //    page1.className = 'active';
   }
console.log(appendPageLinks());

   //for(let p = 0; p < list.length; p ++ ){
    //  document.getElementsByTagName(a).innerHTML += "<a href = '#' >2</a> ;





  //  createDiv.getElementsByClassName('.pagination').appendChild(ul);

// // Remember to delete the comments that came with this file, and replace them with your own code comments.