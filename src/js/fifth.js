document.addEventListener("DOMContentLoaded", function() {
   
    // Continue button click event handler
    var continueBtn = document.getElementById('continue-btn4');
    continueBtn.addEventListener('click', function() {
      // Navigate to the fourth page
      window.location.href = 'sixth.html';
    });

    var continueBtn = document.getElementById('send-back-btn');
    continueBtn.addEventListener('click', function() {
      // Navigate to the fourth page
      window.location.href = 'fourth.html';
    });
  
  });
  