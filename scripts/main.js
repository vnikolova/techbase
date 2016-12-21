$( document ).ready(function() {

  $(".header").load('header.html');

  //load upcoming event page
  $(document).on("click", "#upcomingEventBtn", function(){
      window.location.href = "event.html?name=DeveloperWeek";
  });

  $(document).on("click", ".event-result", function(){
    console.log(this.id);
    window.location.href = "event.html?name="+this.id;

  });

  //login and register


  // register bottom
  $(document).on("click", "#registerBtn", function(){
    $("#login").hide();
    $("#register").show();
  });

  // login bottom
  $(document).on("click", "#loginBtn", function(){
    $("#login").show();
    $("#register").hide();
  });

  // register submit
  $(document).on('click','#submitRegisterBtn', function(){
    //write to json file new user

    //display alert that request was submitted
    $("#registerModal").modal('show');
  });

// on log in
$(document).on('click','#loginSubmit', function(){

  var emailInput = $('#emailLogin').val();
  var passwordInput = $('#passwordLogin').val();

  $.getJSON("db/users.json",function(data)
  {
      for(var key in data){
        var obj = data[key];
        
        if((obj.email == emailInput) && (obj.password == passwordInput)){
          console.log(data.username);
          localStorage.setItem("user",data.username);
          $('#loginForm')[0].reset(); //clear the form
          window.location.assign("admin.html");
        }
        else {
          console.log("no match found");
        }
      }
  });
});

// admin logout
$(document).on('click','.logOut', function(){
  window.location.assign("index.html");
});

//admin pages

$(document).on("click", "#displayEvents", function(){
  $('body').load('admin-events.html');
});
$(document).on("click", "#displayMembers", function(){
  $('body').load('members.html');
});
$(document).on("click", "#displayPartners", function(){
  $('body').load('partners.html');
});
// click on the dashboard
$(document).on("click", "#dashboaradBtn", function(){
  $('body').load('admin.html');
});

// $(document).on("click", "#addEvent", function(){
//   $('body').load('addEvent.html');
// });
$(document).on("click", "#addNewEvent", function(){
  // console.log('x');
  $('#addNewDiv').show();
});

    $('.delete').click(function(){
        $(this).parent().remove();
        return false;
    });

// MEMBERS
$(document).on("click", "#saveMemberBtn", function(){
var name = $("#name").val();
var lastName = $("#lastName").val();
var username = $("#username").val();
var password = $("#password").val();
console.log(name, lastName, username, password);

var linkToApi = 'admin-api.php?cmd=save';
  console.log(linkToApi);
//
// $.getJSON(linkToApi, function(jData){
//   console.log(jData);
//   // display result from the if else statement from api  - > if it's saved properly
//   // $('#showResult').html('<p class="">'+jData+'</p>');
// });
});

});
