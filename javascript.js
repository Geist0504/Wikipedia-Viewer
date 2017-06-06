

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
    $('.preview').addClass('animated fadeInLeft');
    postSubmit();
    var wiki = getWiki(topic);
    wiki.done(function(obj){
      addWiki(obj);
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

function addWiki(obj){
  var [ , titles, content, urls] = obj;
  var i = 0;
  var timer = setInterval(function(){
    if (i < titles.length){
      console.log(titles[i]);
      $('.previews').append('<a class="preview animated fadeInLeft" href="nothing"><h2></h2><p></p></a>');
      $('.previews a:last-child').attr('href',urls[i]);
      $('.previews a:last-child > h2').text(titles[i]);
      $('.previews a:last-child > p').text(content[i]);
      i++;
      }
      else{
        clearInterval(timer);
      }
    }, 500);
}

fun


/*function addWiki(obj){
  var [ , titles, content, urls] = obj;
  for(let i = 0; i<titles.length; i++){
    setTimeout(function(){
      console.log(titles[i]);
      $('.previews').append('<a class="preview animated fadeInLeft" href="nothing"><h2></h2><p></p></a>');
      $('.previews a:last-child').attr('href',urls[i]);
      $('.previews a:last-child > h2').text(titles[i]);
      $('.previews a:last-child > p').text(content[i]);
    },500);
  }
} */
