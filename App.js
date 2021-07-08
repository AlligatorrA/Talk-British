var translate = document.querySelector("#translate");
var txt = document.querySelector("#txt");
var output = document.querySelector("#output");


const serverURL = "https://api.funtranslations.com/translate/british.json"

function getTranslationURL(text){
  return serverURL + "?" + "text=" + text
}

function erorHandler(){
  console.log("error occured", error );
  alert(" 😔 Error mate! Try after some time 😔");
}

function clickHaandler(){
  var inputText = txt.value;
  output.innerHTML = (inputText);

fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
  var translatedText = json.content.translated;
  output.innerHTML = translatedText;
})

};




function speakHandler(){
    const out = document.getElementById("output").value
    responsiveVoice.speak(out);
   
  }
translate.addEventListener("click",clickHaandler);
speak.addEventListener("click", speakHandler);