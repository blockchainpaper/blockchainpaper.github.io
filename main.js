function hideContent(contentArray) {
  contentArray.each(function(){
    $(this).css("display", "none");
  })
}

$(document).ready(function() {
  var contentArray = $(".link");

  hideContent(contentArray);
  $("#investigation").css("display", "block");
    
  $("#inv-nav").on('click', function(){
    hideContent(contentArray);
    $("#investigation").css("display", "block");
  })

  $("#members-nav").on('click', function(){
    hideContent(contentArray);
    $("#members").css("display", "block");
  })

  $("#papers-nav").on('click', function(){
    hideContent(contentArray);
    $("#papers").css("display", "block");
  })

  $("#links-nav").on('click', function(){
    hideContent(contentArray);
    $("#contacto").css("display", "block");
  })
})
