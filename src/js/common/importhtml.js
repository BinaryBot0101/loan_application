// import 
var container = document.getElementById('imported-progress-content');
var object = document.createElement('object');
object.setAttribute('type', 'text/html');
object.setAttribute('data', 'progressbar.html');
container.appendChild(object);


// $(document).ready(function() {
//     $.ajax({
//       url: 'progressbar.html',
//       type: 'GET',
//       dataType: 'html',
//       success: function(response) {
//         $('#imported-progress-content').html(response);
//       }
//     });
//   });
