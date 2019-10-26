let search ='beijing';

let weatherKey = '&APPID=5f7315f331181aa4ac6571d7f18b543a';
let weatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=';
let weatherlink = weatherapi + search + weatherKey ;
let weatherData;

function setup() {
  noCanvas();

  loadJSON(weatherlink,gotWeather);
}

function draw() {
  
  
}

function gotWeather(dataWeather){
  
  weatherData= dataWeather.weather[0].main;
  console.log(weatherData);

let api='https://api.giphy.com/v1/gifs/search?api_key=VmOeBabbDRLBPpGbLpMOzvIgvFzs9bsZ&q='+weatherData+'&limit=25&offset=0&rating=G&lang=en';

  loadJSON(api,gotData);
  
}

function gotData(giphy){
  // console.log(api);

console.log(giphy.data[0].images.original.url)
  createImg(giphy.data[0].images.original.url);
  }
