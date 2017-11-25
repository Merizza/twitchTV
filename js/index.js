$(function() {
  
var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

//get channels info
  
channels.forEach(function(channel) {
$.getJSON("https://wind-bow.glitch.me/twitch-api/channels/"+channel+"?callback=?", function(response) {
  console.log(response);
  var logo=response.logo;
  var name=response.display_name;
  var link=response.url;

  var dummyLogo="https://dummyimage.com/600x400/000000/fff.png&text=dummy+logo";
  
  logo !=null ? logo : logo=dummyLogo;
  
 var state, status;
  // get channel status
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+channel+"?callback=?", function(data) {
    state = data.stream;
    if(state===null) {
      status = "<em style='color:grey'>This channel is offline</em>";
    } else if(state===undefined) {
      status = "The channel is closed";       
    } else {
      status = data.stream.channel.status;
    }
    var listHtml = "<li><a href="+link+" target='_blank'><img src="+logo+"></a><span>"+name+"</span><span id='description'>"+status+"</span></li>";
  
   $("#logo").append(listHtml);
 
      });
  
    });
    
  });
  
});