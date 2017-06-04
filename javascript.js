

$('document').ready(function() {

  $('#search-label').on('click', function(e) {
     e.preventDefault();
     $('#search-box').focus();
     return false;
  });
  $('.fa-search').on('click', function() {
    changeIcon();
  });

  $('.searchForm').submit(function(event){
    event.preventDefault();
    var topic = $('.searchInput').val();
    postSubmit();
    var wiki = getWiki(topic);
    wiki.done(function(obj){
      var [ , titles, content, urls] = obj;
      console.log(titles);
    });
  });
  /*$('.fa-search').mouseout(function() {
    if(!$('input').is(":focus")){
      $('input').stop().animate({
        width: '0px',
        borderWidth: '0',
      }, 'fast');
    }
  });*/

  $('.test').click(function(){
    var wiki = getWiki('New York');
    wiki.done(function(obj){
      console.log(obj);
      var [ , titles, content, urls] = obj;
      console.log(titles);
    });
  });
});


function changeIcon(){
  $('.fa-search').css('display','none');
    $('.search').css('display','block');
    $('.icon').css('top', '312px');
    $('input').stop().animate({
      width: '300px',
      borderWidth: '5px'
    }, 'fast');
}

function postSubmit(){
    $('.lucky').css('display','none');
    $('.icon').css('top', '10px');
}

function getWiki(topic){
    return $.ajax({
        url:  'https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&format=json&origin=*&search=' + topic,
        dataType: 'json',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Andrew amg877@aol.com' }
    });
}
