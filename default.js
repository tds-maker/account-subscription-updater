$(document).ready(function() {
  const _password = '12345';
  const password = prompt('Please enter password:');
  if (!password == null || !password == '') {
    if (_password === password) {
      $('#_form').css('display', 'block');
    } else {
      document.getElementById('text').innerHTML = 'Your password is wrong.';
      $('#try-button').css('display', 'inline-block');
    }
  } else {
    document.getElementById('text').innerHTML = 'You must enter password.';
    $('#try-button').css('display', 'inline-block');
  }
  $('#try-button').click(function() {
    location.reload();
  });
});
