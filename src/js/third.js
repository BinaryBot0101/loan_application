// $(document).ready(function() {
//     // Checkbox event handler
//     $('#clear-aadhaar').change(function() {
//       var aadhaarNoInput = $('#aadhaar-no');
//       if ($(this).is(':checked')) {
//         aadhaarNoInput.val('').prop('disabled', false);
//       } else {
//         aadhaarNoInput.val('xxx').prop('disabled', true);
//       }
//     });
  
//     // Validate Aadhaar button click event handler
//     $('#validate-aadhaar-btn').click(function() {
//       var aadhaarNoInput = $('#aadhaar-no');
//       var aadhaarNo = aadhaarNoInput.val();
      
//       if (!aadhaarNo) {
//         alert('Aadhaar No. is a required field.');
//         return;
//       }
  
//       // Verification logic goes here
  
//       // Show verification modal
//       $('#verificationModal').modal('show');
//     });
  
//     // Continue button click event handler
//     $('#continue-btn').click(function() {
//       // Navigate to the fourth page
//       window.location.href = 'fourth_page.html';
//     });
//   });

// document.addEventListener("DOMContentLoaded", function() {
//   // Checkbox event handler
  
 

//   var clearAadhaar = document.getElementById('clear-aadhaar');
//   clearAadhaar.addEventListener('change', function() {
//     var aadhaarNoInput = document.getElementById('aadhaar-no');
//     if (clearAadhaar.checked) {
//       aadhaarNoInput.value = '';
//       aadhaarNoInput.disabled = false;
//     } else {
//       aadhaarNoInput.value = 'xxxx - xxxx - x548';
//       aadhaarNoInput.disabled = true;
//     }
//   });

//   // Validate Aadhaar button click event handler
//   var validateAadhaarBtn = document.getElementById('validate-aadhaar-btn');
//   validateAadhaarBtn.addEventListener('click', function() {
//     var aadhaarNoInput = document.getElementById('aadhaar-no');
//     var aadhaarNo = aadhaarNoInput.value;

//     if (!aadhaarNo) {
//       aadhaarNoInput.classList.add('is-invalid');
//       alert('Aadhaar No. is a required field.');
//       return;
//     } else {
//       aadhaarNoInput.classList.remove('is-invalid');
//     }

//     // Verification logic goes here
    
//     // Show verification modal
//     var verificationModal = document.getElementById('verificationModal');
//     var bootstrapModal = new bootstrap.Modal(verificationModal);
//     bootstrapModal.show();
//   });

//   // Continue button click event handler
//   var continueBtn = document.getElementById('continue-btn');
//   continueBtn.addEventListener('click', function() {
//     // Navigate to the fourth page
//     window.location.href = 'fourth.html';
//   });

//   var continueBtn = document.getElementById('send-back-btn');
//   continueBtn.addEventListener('click', function() {
//     // Navigate to the fourth page
//     window.location.href = 'second.html';
//   });

//   var requiredFields = document.getElementById('input[required]');
//   requiredFields.addEventListener('input', function() {
//     requiredFields.classList.removeclass('is-invalid');
//   });
  
// });

document.addEventListener("DOMContentLoaded", function() {
  // Checkbox event handler
  var clearAadhaar = document.getElementById('clear-aadhaar');
  clearAadhaar.addEventListener('change', function() {
    var aadhaarNoInput = document.getElementById('aadhaar-no');
    if (clearAadhaar.checked) {
      aadhaarNoInput.value = '';
      aadhaarNoInput.disabled = false;
    } else {
      aadhaarNoInput.value = 'xxxx - xxxx - x548';
      aadhaarNoInput.disabled = true;
    }
  });

  // Validate Aadhaar button click event handler
  var validateAadhaarBtn = document.getElementById('validate-aadhaar-btn');
  validateAadhaarBtn.addEventListener('click', function() {
    var aadhaarNoInput = document.getElementById('aadhaar-no');
    var aadhaarNo = aadhaarNoInput.value;

    if (!aadhaarNo) {
      aadhaarNoInput.classList.add('is-invalid');
      alert('Aadhaar No. is a required field.');
      return;
    } else {
      aadhaarNoInput.classList.remove('is-invalid');
    }

    // Verification logic goes here
    
    // Show verification modal
    var verificationModal = document.getElementById('verificationModal');
    var bootstrapModal = new bootstrap.Modal(verificationModal);
    bootstrapModal.show();
  });

  // Continue button click event handler
  var continueBtn = document.getElementById('continue-btn');
  continueBtn.addEventListener('click', function() {
    // Navigate to the fourth page
    window.location.href = 'fourth.html';
  });

  // Send back button click event handler
  var sendBackBtn = document.getElementById('send-back-btn');
  sendBackBtn.addEventListener('click', function() {
    // Navigate back to the second page
    window.location.href = 'second.html';
  });

  // Format Aadhaar number input
  var aadhaarNoInput = document.getElementById('aadhaar-no');
  aadhaarNoInput.addEventListener('input', function() {
    var value = this.value.replace(/\D/g, ''); // Remove non-digit characters
    var formattedValue = '';
    for (var i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' - ';
      }
      formattedValue += value[i];
    }
    this.value = formattedValue.substring(0, 18); // Limit to 14 characters (12 digits + 2 hyphens)
  });

  // Remove "is-invalid" class on input change
  var requiredFields = document.querySelectorAll('input[required]');
  requiredFields.forEach(function(field) {
    field.addEventListener('input', function() {
      field.classList.remove('is-invalid');
    });
  });
});
