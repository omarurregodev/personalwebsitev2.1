$(document).ready(function() {
    let words = ['Civil Engineer', 'Full Stack Web Developer', 'and'],
    wordWrapper = document.getElementById("words"),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 150);
});






// TOOLTIP FOR THE NAVBAR

tippy('#home_btn_nav', {
    content: 'Home',
    placement: 'left', 
});
tippy('#about_btn_nav', {
    content: 'About',
    placement: 'left', 
});
tippy('#skills_btn_nav', {
    content: 'Skills',
    placement: 'left', 
});
tippy('#portfolio_btn_nav', {
    content: 'Portfolio',
    placement: 'left', 
});
tippy('#contact_btn_nav', {
    content: 'Contact',
    placement: 'left', 
});


// DEFINE TITLE
$(document).ready(function () {
    $("#title_page").html("Home | OmarTorres");   
    $("#body_height").css('background-color','#353535');

    // IN MOBILE, DONT SHOW THE ILLUSTRATION
    $(window).resize(function() {
        if($("#body_height").width() < 480) {
            $(".avatar_img").css('display','none');
            $(".ilustration").css({'width':'20rem','left':'calc(50% - 10rem)'});
        } else {
            $(".avatar_img").css('display','block');
            $(".ilustration").css({'width':'24rem','left':'calc(50% - 12rem)'});
        }
    });  
});





//SCROLL ANIMATION AND DYNAMIC TITLE
$(document).ready(function (){
    
    $("#footer_down_btn").click(function (){
        $('html, body').animate({
            scrollTop: $("#footer_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#title_page").html("Contact | OmarTorres");  
    });

    // SCROLL TO A CONTACT SECTION FROM LET'S CHAT BUTTON
    $("#contact_btn_nav_2").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#title_page").html("Contact | OmarTorres"); 
    });

    // SCROLL TO A SECTIONS FROM THE NAVBAR
    $("#logo_btn_home").click(function (){
        $('html, body').animate({
            scrollTop: $("#header_home").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("Home | OmarTorres"); 
    });

    $("#home_btn_nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#header_home").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("Home | OmarTorres"); 
    });
    $("#about_btn_nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#about_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("About Me | OmarTorres"); 
    });
    $("#skills_btn_nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#skills_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("Skills | OmarTorres"); 
    });
    $("#portfolio_btn_nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#portfolio_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("Portfolio | OmarTorres"); 
    });
    $("#contact_btn_nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#title_page").html("Contact | OmarTorres"); 
    });
    
    //SCROLL TO A SECTIONS FROM NAVBAR FOOTER
    $("#home_navbar_footer").click(function (){
        $('html, body').animate({
            scrollTop: $("#header_home").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("Home | OmarTorres"); 
    });
    $("#about_navbar_footer").click(function (){
        $('html, body').animate({
            scrollTop: $("#about_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("About Me | OmarTorres"); 
    });
    $("#skills_navbar_footer").click(function (){
        $('html, body').animate({
            scrollTop: $("#skills_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("Skills | OmarTorres"); 
    });
    $("#portfolio_navbar_footer").click(function (){
        $('html, body').animate({
            scrollTop: $("#portfolio_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#contact_btn_nav").css({"background":"","color":"#fff"});
        $("#title_page").html("Portfolio | OmarTorres"); 
    });
    $("#footer_navbar_footer").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact_sec").offset().top
        }, 250);
        $("#home_btn_nav").css({"background":"","color":"#fff"});
        $("#about_btn_nav").css({"background":"","color":"#fff"});
        $("#skills_btn_nav").css({"background":"","color":"#fff"});
        $("#portfolio_btn_nav").css({"background":"","color":"#fff"});
        $("#contact_btn_nav").css({"background":"#3C6E71","color":"#fff"});
        $("#title_page").html("Contact | OmarTorres"); 
    });
});