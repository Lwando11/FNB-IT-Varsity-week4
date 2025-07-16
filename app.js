//document.getElementById("heading1").innerHTML=("This is JavaScript")
//document.getElementById("paragraph1").innerHTML = ("This is fun")

//const userInputPassword = "007"
//const correctPassword = "007"

//if(correctPassword == userInputPassword){
 //   document.getElementById("output").innerHTML = "Correct Password"
//} else{
   // document.getElementById("output").innerHTML = "Incorrect Passowrd, Try again"

//}
  
const btn1 = document.getElementById("btn")
const textEl = document.getElementById("outputText")



btn1.addEventListener("click", function(){
    const weatherSelected = document.getElementById("weather").value;
    var advice;
    switch(weatherSelected){
        case "sunny":
        advice = "Wear Sunglasses Today";
        break;
        case "rainy":
        advice = "Wear rain coat and bring umbrella";
        break;
        case "snowy":
        advice = "Wear warm jactet Today";
        break;
        case "windy":
        advice = "Wear a wind breaker Today";
        break;
        case "cloudy":
        advice = "Wear bright warm jackets Today";
        break;
    }
    textEl.innerHTML = "Weather Advice" + advice;
console.log(btn1, textEl);
})

