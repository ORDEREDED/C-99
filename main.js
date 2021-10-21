var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("tetbox").innerHTML="";
recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("tetbox").innerHTML=content;
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
          speak_data= document.getElementById("tetbox").innerHTML;
                                                                var utterthis=new SpeechSynthesisUtterance(speak_data);                                                      
synth.speak(utterthis);
Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
                width: 350,
                height: 250,
                      image_format: 'jpg',
                      jpg_quality: 90
});











