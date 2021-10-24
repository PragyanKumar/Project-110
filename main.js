//https://teachablemachine.withgoogle.com/models/frOaaxcIG/
prediction_1=""
prediction_2=""

// Webcam//
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:100
})

camera=document.getElementById("camera")
Webcam.attach("#camera")

//Snapshot function//
function take_snapshot(){
    Webcam.snap( function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_uri + '">'
    } )
}
//model loader//
console.log("ml5 version "+ ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/frOaaxcIG//model.json" , modelLoaded)

function modelLoaded(){
    console.log('modelLoaded')
}

//speaking function//
function speaking(){
    var synth= window.speechSynthesis
    speak_data_1= "The first emoji is " + prediction_1
    speak_data_2= "and the second emoji is " + prediction_2
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
    synth.speak(utterThis)
}