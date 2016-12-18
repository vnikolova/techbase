$( document ).ready(function() {

  $(".header").load('header.html');

  //load upcoming event page
  $(document).on("click", "#upcomingEventBtn", function(){
      window.location.href = "event.html?name=DeveloperWeek";
    });

  //load events page
  $(document).on("click", "#eventsLink", function(){

    $(".content").load('events.html');
    $.getJSON("./db/events.json", function(events){
      var html = "";

      $.each(events, function (key, val ) {
          html += '<div id="'+key+'"class="event-result row"><div class="col-1of4"><img class="event-image"src="img/svg/date.svg" alt="" /><h3 class="event-date">'+
          val.date+'</h3></div><div class="col-3of4"><h2 class="event-title">'+
          val.title+'</h2><p>'+val.location+'</p><img src="img/svg/time.svg" class="event-svg" alt="" /><span>'+
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
