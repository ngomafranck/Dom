var divRoot = document.getElementById('root');
var newul=document.createElement('ul');
divRoot.textContext="Hello world"
divRoot.appendChild(newul);

var arrWord=['item1','item2','item3','item4','item5'];
for (var i = 0; i < arrWord.length; i++){
	
  var newli=document.createElement('li');
  newul.appendChild(newli);
  newli.innerHTML=arrWord[i];
}

    
  function Truc() {
    
    a=prompt("Quel est votre nom?")
   
   if (a.length===0){
    	alert("Désolé, au revoir...");
     }else{
     	alert("Bonjour, je m'appelle:" +" " + a.toUpperCase());
    
     }
    
   }
    
    