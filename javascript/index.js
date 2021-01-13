window.addEventListener("load", startup, false);

function startup(){
  var colorpicker = document.querySelector("#colorpicker")
  var avatar = document.querySelector("img")
  var name = document.querySelector('#Whooktitle')
  name.innerHTML = 'send your embed ^^'
  avatar.src = "https://cdn.discordapp.com/attachments/759679730987040811/797176880394010695/unknown.png"
  colorpicker.value = '#4287f5' ;
  colorpicker.addEventListener("input",update,false)
  colorpicker.select()
  var h  = document.querySelector('.h')
  var i  = document.querySelector('.i')
  h.style.visibility = 'hidden';
  i.style.visibility = 'hidden';
  var WebHook = document.querySelector("#WebHook")
  WebHook.addEventListener("change",avatarChange, false)
  const Title = document.getElementById('Title')
  Title.addEventListener("change",update, false)

}
function update(e) {
  var embedcolor = document.querySelector('#embedcolor');
  const Title = document.getElementsByClassName('Title')
  var i  = document.querySelector('.i')
  if(Title){
    i.style.visibility = 'visible';
  }else{
    startup
  }
  if (embedcolor) {
    embedcolor.style.background = e.target.value;
  }
}
async function avatarChange(e){
  e.preventDefault();
  const WhookUrl = await document.getElementById('WebHook').value || null;
  fetch(WhookUrl) 
    .then(res => res.json())
      .then((out) => {
          var id = out.id
          var avatar = out.avatar
          var img = document.querySelector('img')
          var name = document.querySelector('#Whooktitle')
          var h  = document.querySelector('.h')
          if(id && avatar){
            img.src = `https://cdn.discordapp.com/avatars/${id}/${avatar}`
            name.innerHTML = out.name
            
            h.style.visibility = 'visible'
          }
      }).catch(err => {
        console.error(err)
        startup();
      }); 
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
    var check = document.querySelector('#everyone');
    
    
    request.open("POST", WhookUrl)
    request.setRequestHeader('Content-type', 'application/json');
    if(check.checked == true){
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
        embeds : [ Embed ],
        content: '@everyone'
      }
      
    }else {
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
        embeds : [ Embed ],
        content: ''
      }
      
    }
 
    
    request.send(JSON.stringify(params));
    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }
}
