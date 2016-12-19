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
    window.location.href = "events.html";
  });

  $(document).on("click", ".event-result", function(){
    console.log(this.id);
    window.location.href = "event.html?name="+this.id;

  });

});
