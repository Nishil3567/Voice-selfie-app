var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        speak();
    }
   
}
function speak(){
    var synth = window.speechSynthesis;
    speakdata = "Taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach('#camera');
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie" src="'+ data_uri +'">';
    });
}
function save(){
    save = document.getElementById("link");
    image = document.getElementById("selfie").src;
    save.href = image;
    save.click();
}
