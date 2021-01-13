function test(){
    var getJSON = function(url, callback) {
 
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Access-Control-Allow-Origin','*')
        xhr.setRequestHeader('Access-Control-Allow-Methods',"GET,HEAD,OPTIONS,POST,PUT")
        xhr.setRequestHeader('Access-Control-Allow-Header',
        "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        
        xhr.onload = function() {
        
            var status = xhr.status;
            
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        
        xhr.send();
    };
    
    getJSON('https://discord.com/api/webhooks/796598576439361587/eGHE8sQidA7eE_UbrWOUh1tpqOT0PRxSRo1wGoh317nUILBhUL0yL-7u6nlyN1OwltnB',  function(err, data) {
        
        if (err != null) {
            console.error(err);
        } else {
            
                        var text = `Name: ${data.name} 
id: ${data.id}
avatar: ${data.avatar}`
        
            alert(text);
        }
    });
}