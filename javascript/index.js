window.addEventListener("load", startup, false);

function startup(){
  var colorpicker = document.querySelector("#colorpicker")
  colorpicker.value = '#dd00ff' ;
  colorpicker.addEventListener("input",update,false)
  colorpicker.select()

}
function update(e) {
  var embedcolor = document.querySelector('#embedcolor');
  
  if (embedcolor) {
    embedcolor.style.background = e.target.value;
  }
}

async function sendMessage() {
    
    var request = new XMLHttpRequest();
    const WhookUrl = await document.getElementById('WebHook').value;
    const Title = document.getElementById('Title').value || "";
    const Content = document.getElementById('Content').value || "" ;
    const Messagelinks = "" 
    const Thumbnail = document.getElementById('Thumbnail').value || ""; 
    const Image = document.getElementById('Image').value || "";
    var color = document.querySelector('#colorpicker').value || "";
    request.open("POST", WhookUrl)
    request.setRequestHeader('Content-type', 'application/json');
    
    var Embed = {
      title : Title,
      description : Content,
      color : hexToDecimal(color) ,
      thumbnail : 
      {
        url : Thumbnail
      },
      image : 
      {
        url : Image
      },
    }
    var params = {
      username: "",
      embeds : [ Embed ]
      
    }
    
    request.send(JSON.stringify(params));
  
    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }
}
