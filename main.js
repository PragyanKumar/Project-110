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
// Check function//
function Check(){
    img = document.getElementById('captured_image');
    classifier.classify(img , gotResult);
}

// GotResult function//
function gotResult(error , results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML= results[0].label;
        document.getElementById("result_emotion_name2").innerHTML= results[1].label;
        prediction_1=results[0].label;
        prediction_2= results[1].label;

        speak();
        if(results[0].label == "happy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if(results[0].label == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if(results[0].label == "angry")
        {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
        if(results[0].label == "sleepy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128564;";
        }
        if(results[0].label == "happy")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }
        if(results[0].label == "sad")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }
        if(results[0].label == "angry")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128548;";
        }
        if(results[0].label == "sleepy")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128564;";
        }

    }
}