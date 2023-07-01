// var termsCheckbox = document.getElementById('terms-checkbox');
// var sendSmsBtn = document.getElementById('send-sms-btn');

// termsCheckbox.addEventListener('change', function() {
//   sendSmsBtn.disabled = !termsCheckbox.checked;
// });


// $(document).ready(function() {
//     var termsCheckbox = $('#terms-checkbox');
//     var sendSmsBtn = $('#send-sms-btn');
//     var otpModal = $('#otpModal');
//     var otpInput = $('#otp');
//     var continueBtn = $('#continue-btn');
//     var verifiedText = $('#verified-text');
  
//     termsCheckbox.change(function() {
//       sendSmsBtn.prop('disabled', !termsCheckbox.prop('checked'));
//     });
  
//     sendSmsBtn.click(function() {
//       otpModal.modal('show');
//     });
  
//     otpInput.on('input', function() {
//       if (otpInput.val() !== '') {
//         verifiedText.removeClass('d-none');
//         continueBtn.prop('disabled', false);
//       } else {
//         verifiedText.addClass('d-none');
//         continueBtn.prop('disabled', true);
//       }
//     });
//   });



//   $(document).ready(function() {
//     var termsCheckbox = $('#terms-checkbox');
//     var sendSmsBtn = $('#send-sms-btn');
//     var otpModal = $('#otpModal');
//     var otpInput = $('#otp');
//     var continueBtn = $('#continue-btn');
//     var verifiedText = $('#verified-text');
  
//     termsCheckbox.change(function() {
//       sendSmsBtn.prop('disabled', !termsCheckbox.prop('checked'));
//     });
  
//     sendSmsBtn.click(function() {
//       if ($('input[required]').filter(function() {
//         return $.trim($(this).val()) === '';
//       }).length > 0) {
//         alert('Please fill in all required fields');
//       } else {
//         otpModal.modal('show');
//       }
//     });
  
//     otpInput.on('input', function() {
//       if (otpInput.val() !== '') {
//         verifiedText.removeClass('d-none');
//         continueBtn.prop('disabled', false);
//       } else {
//         verifiedText.addClass('d-none');
//         continueBtn.prop('disabled', true);
//       }
//     });
//   });
  

$(document).ready(function() {
    var termsCheckbox = $('#terms-checkbox');
    var sendSmsBtn = $('#send-sms-btn');
    var otpModal = $('#otpModal');
    var otpInput = $('#otp');
    var continueBtn = $('#continue-btn');
    var verifiedText = $('#verified-text');
    var requiredFields = $('input[required]');
  
    termsCheckbox.change(function() {
      sendSmsBtn.prop('disabled', !termsCheckbox.prop('checked'));
    });
  
    sendSmsBtn.click(function() {
      var isFormValid = true;
  
      requiredFields.each(function() {
        if ($(this).val() === '') {
          isFormValid = false;
          $(this).addClass('is-invalid');
        }
      });
  
      if (!isFormValid) {
        alert('Please fill in all required fields.');
      } else {
        otpModal.modal('show');
      }
    });
  
    // otpInput.on('input', function() {
    //   if (otpInput.val() !== '' & length(otpInput.val()) == 6 ) {
    //     verifiedText.removeClass('d-none');
    //     continueBtn.prop('disabled', false);
    //   } else {
    //     verifiedText.addClass('d-none');
    //     continueBtn.prop('disabled', true);
    //   }
    // });
    otpInput.on('input', function() {
        var otpValue = otpInput.val();
        otpValue = otpValue.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
        otpInput.val(otpValue);
      
        if (otpValue !== '' && otpValue.length === 4) {
          verifiedText.removeClass('d-none');
          continueBtn.prop('disabled', false);
        } else {
          verifiedText.addClass('d-none');
          continueBtn.prop('disabled', true);
        }
      });
      
    requiredFields.on('input', function() {
      $(this).removeClass('is-invalid');
    });
  });
  