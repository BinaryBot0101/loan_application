// $(document).ready(function() {
//     var currentPage = 2; // Replace with your current page number
  
//     // Reset the color of all circles to grey
//     $('.circle').removeClass('blue green').addClass('grey');
  
//     // Color the current page circle as blue
//     $('#circle' + currentPage).addClass('blue');
  
//     // Color the previous page circles as green
//     for (var i = 1; i < currentPage; i++) {
//       $('#circle' + i).removeClass('blue grey').addClass('green');
//     }
//   });
  


// $(document).ready(function() {
//     var currentPage = 2; // Replace with your current page number
  
//     var progressWidth = ((currentPage - 1) / 7) * 100; // Calculate the width based on the current page number
  
//     $('.progress-bar').css('width', progressWidth + '%').attr('aria-valuenow', progressWidth); // Update the width and aria-valuenow attribute
//   });
  

// Create the Ionicons ES module script element
const ioniconsESM = document.createElement('script');
ioniconsESM.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
ioniconsESM.type = 'module';

// Create the Ionicons nomodule script element
const ioniconsNomodule = document.createElement('script');
ioniconsNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';

// Append the script elements to the head of the document
document.head.appendChild(ioniconsESM);
document.head.appendChild(ioniconsNomodule);



const items = document.querySelectorAll('.progress-item');
const statuses = document.querySelectorAll('.progress-status');
const limit = items.length-1;
let i = 0;

function updateStatus() {
  statuses.forEach((status,index) => {
    if (index < i) status.textContent = 'Completed';
    if (index > i) status.textContent = 'Pending';
    if (index === i) status.textContent = 'In Progress';
  });
}

function next() {
  i++;
  if (i >= limit) i = limit;
  items[i].classList.add('active');
  updateStatus();
  if (i === limit) statuses[limit].textContent = 'Completed';
}

function previous() {
  i--;
  if (i <= 0) i = 0; 
  items[i].nextElementSibling.classList.remove('active');
  updateStatus();
}

function activate(e) {
  e.target.matches('.prev') && previous();
  e.target.matches('.next') && next()
}

const init = () => items[0].classList.add('active');

document.addEventListener('click',activate,false);
window.addEventListener('load',init,false);


