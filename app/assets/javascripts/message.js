$(function(){

  function buildHTML(message){
    var addImage = ('.lower-message__image' !== null) ? `<img class = "lower-message__image", src="${message.image}">` : ''
  
    var html = `<div class="message">
    <div class="upper-message">
    <div class="upper-message__user-name">
    ${message.name}
    </div>
    <div class="upper-message__date">
    ${message.updated_at}
    </div>
    </div>
    <div class="lower-message">
    <p class="lower-message__content">
    ${message.content}
    </p>
    </div>
    <p class="message__text">${addImage}</p>
    </div>`
                 
                
    return html
  };




  $('.new_message').on('submit', function(e) {
    e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action'); 
 
  $.ajax({
    url: url, 
    type: 'POST',  
    data: formData,  
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(message){
    var html = buildHTML(message);
    $('.messages').append(html);
    $('.form__message').val('');
    $('.form__submit').prop('disabled', false);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');

  })
  .fail(function(massege){
    alert('メッセージを入力してください');
  })
  })
}); 
