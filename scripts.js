document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with class 'exam-option'
  var examOptions = document.querySelectorAll('.exam-option');

  // Loop through each 'exam-option' element
  examOptions.forEach(function(option) {
    // Add click event listener
    option.addEventListener('click', function(event) {
      // Prevent default link behavior
      event.preventDefault();

      // Toggle the visibility of sub-options
      var subOptions = this.nextElementSibling;
      subOptions.classList.toggle('show');
    });
  });
});
// JavaScript for sidebar toggle
document.getElementById('sidebarToggle').addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('show');
});
//   document.addEventListener('click', function(event) {
//     if (!sidebar.contains(event.target)) {
//       sidebar.classList.remove('show');
//     }
//   });

// JavaScript for close sidebar button
// document.getElementById('sidebarClose').addEventListener('click', function() {
//   document.getElementById('sidebar').classList.remove('show');
// });




// document.addEventListener('DOMContentLoaded', function() {
//   var sidebar = document.getElementById('sidebar');
//   var sidebarClose = document.getElementById('sidebarClose');

//   // Close sidebar when close button is clicked
//   sidebarClose.addEventListener('click', function() {
//     sidebar.classList.remove('show');
//   });

//   // Optionally, close sidebar when clicking outside of it


//   // Toggle sidebar when sidebarToggle button is clicked
//   var sidebarToggle = document.getElementById('sidebarToggle');
//   sidebarToggle.addEventListener('click', function() {
//     sidebar.classList.toggle('show');
//   });
// });
