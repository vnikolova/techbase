$( document ).ready(function() {

  $(".header").load('header.html');

  //load upcoming event page
  $(document).on("click", "#upcomingEventBtn", function(){
      window.location.href = "event.html?name=DeveloperWeek";
  });

 //calendar link
 $(document).on("click", "#calendarLink", function(){
     window.location.href = "calendar.html";
  });

  //load events page
  $(document).on("click", "#eventsLink", function(){

    $(".content").load('events.html');
    $.getJSON("./db/events.json", function(events){
      var html = "";

      $.each(events, function (key, val ) {
        var tags = "";
        //get all tags and add to div
          $.each(val.tags, function(key, val){
            tags += '<a href="#" class="tag">'+val+'</a>';
          });

          html += '<div id="'+key+'"class="event-result row"><div class="event-result-left col-1of4"><img class="event-image"src="img/svg/date.svg" alt="" /><h3 class="event-date">'+
          val.date+'</h3></div><div class="event-result-info col-3of4"><h2 class="event-title">'+
          val.title+'</h2><p class="tags"><a class="tag">'+
          val.location+'</a>'+tags+'</p><img src="img/svg/time.svg" class="event-svg" alt="" /><span>'+
          val.time+'</span><img src="img/svg/seat.svg" class="event-svg" alt="" /><span>'+
          val.seats+'</span></div></div>'
       });
        $('#eventsList').html(html);

    });
  });

  $(document).on("click", ".event-result", function(){
    console.log(this.id);
    window.location.href = "event.html?name="+this.id;

  });

});
