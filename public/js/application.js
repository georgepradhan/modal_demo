function dimBackground(){
  var myDiv = '<div id="dimmer"></div>'
  $('body').append(myDiv)
}

function dropIn(modal_id){
  $(modal_id).animate({top:"100px"},500)
}


$(document).ready(function() {
  $('#modal_link').click(function(e){
    e.preventDefault()
    dimBackground();

    $.get('/modal', function(server_data){
      $('#result_container').append(server_data)
      dropIn('#result_container')
    })
  })
});
