 
const container =document.createElement("div")  ;
container.setAttribute("class","container");
const head =document.createElement("H1")
head.setAttribute("id","title");
head.setAttribute("class","text-center");
head.innerHTML="Restcountry with weather";
container.append(head);
document.body.append(container );
 





// Fetch country data
var res =fetch("https://restcountries.com/v2/all")
  res.then((data) => data.json())
  .then((data1) => {
    data1.forEach((country) => {
      console.log(country);
      var div = document.createElement("div");

      div.innerHTML = ` 
        <div class="card" style="width: 18rem;">
 
          <img src="${country.flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title">Name: ${country.name}</h6>
            <h6 class="card-title">Capital: ${country.capital}</h6>
            <h6 class="card-title">Region: ${country.region}</h6>
            <h6 class="card-title">Country Code: ${country.alpha2Code}</h6>
            <h6 class="card-title">latlng: ${country.latlng [0] }</h6>
            <h6 class="card-title">latlng: ${country.latlng [1] }</h6>
          
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-${country.alpha2Code}">Click for weather</button>
          </div>
         
        </div>`;

      document.body.append(div);

      // Fetch weather data for each country
      const lat = country.latlng[0];
      const lng = country.latlng[1];
      const WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`;

      var res1 = fetch(WAPI)
        res1.then((data) => data.json())
        .then((weatherData) => {
          var weatherDiv = document.createElement("div");

          weatherDiv.innerHTML = `
            <div class="modal fade" id="modal-${country.alpha2Code}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">${country.name} Weather</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    
                    <h4 class="w">Weather</h4><br>
                    
                    <h6>longitude: ${JSON.stringify(weatherData.coord.lon)} </h6><br>
  <h6>latitude : ${JSON.stringify(weatherData.coord.lat)} </h6><br>
  <h6>temp : ${JSON.stringify(weatherData.main.temp)} </h6><br>
  <h6>pressure : ${JSON.stringify(weatherData.main.pressure)} </h6><br>
  <h6>humidity : ${JSON.stringify(weatherData.main.humidity)} </h6><br>
  <h6>sea_level : ${JSON.stringify(weatherData.main.sea_level)} </h6><br>
  <h6>grnd_level: ${JSON.stringify(weatherData.main.grnd_level)} </h6><br>
  <h6>visibility: ${JSON.stringify(weatherData.visibility)} </h6><br>
  <h6>wind_speed: ${JSON.stringify(weatherData.wind.speed)} </h6><br>
  <h6>country : ${JSON.stringify(weatherData.country)} </h6><br>
  <h6>sunrise : ${JSON.stringify(weatherData.sunrise)} </h6><br>
  <h6>sunset : ${JSON.stringify(weatherData.sunset)} </h6><br>
  <h6>timezone : ${JSON.stringify(weatherData.timezone)} </h6><br>
  <h6>id  : ${JSON.stringify(weatherData.id)} </h6><br>
  <h6>name  : ${JSON.stringify(weatherData.name)} </h6><br>
  <h6>cod  : ${JSON.stringify(weatherData.cod)} </h6>
                   </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;

          document.body.append(weatherDiv);
        })
        .catch((error) => console.error(error));
    });
  })
  // .catch((error) => console.error(error));
 // <h6>longitude: ${JSON.stringify(weatherData )} </h6>
//   <h6>longitude: ${JSON.stringify(weatherData.coord.lon)} </h6>
//   <h6>latitude: ${JSON.stringify(weatherData.coord.lat)} </h6>
//   <h6>temp: ${JSON.stringify(weatherData.main.temp)} </h6>
//   <h6>pressure: ${JSON.stringify(weatherData.main.pressure)} </h6>
//   <h6>humidity: ${JSON.stringify(weatherData.main.humidity)} </h6>
//   <h6>sea_level: ${JSON.stringify(weatherData.main.sea_level)} </h6>
//   <h6>grnd_level: ${JSON.stringify(weatherData.main.grnd_level)} </h6>
//   <h6>visibility: ${JSON.stringify(weatherData.visibility)} </h6>
//   <h6>wind_speed: ${JSON.stringify(weatherData.wind.speed)} </h6>
//   <h6>country: ${JSON.stringify(weatherData.country)} </h6>
//   <h6>sunrise: ${JSON.stringify(weatherData.sunrise)} </h6>
//   <h6>sunset: ${JSON.stringify(weatherData.sunset)} </h6>
//   <h6>timezone: ${JSON.stringify(weatherData.timezone)} </h6>
//   <h6>id: ${JSON.stringify(weatherData.id)} </h6>
//   <h6>name: ${JSON.stringify(weatherData.name)} </h6>
//   <h6>cod: ${JSON.stringify(weatherData.cod)} </h6>
{/* <h6 class="card-title">latlng: ${country.latlng[1]  }</h6> */}
// {"country":"AL","sunrise":1693022424,"sunset":1693070636},"timezone":7200,"id":783754,"name":"Albania","cod":200}
// longitude: 20
// var API = "https://restcountries.com/v2/all";


// var fet = fetch(API)
//   .then((response) => response.json())
//   .then((data) => {
    
//     data.map((value) => {
//       var spreadOperator = {
//         ...value,
//         name: value.name.common,
//         flag: value.flags.png,
//         code: value.cioc,
//         capital: value.capital,
//         region: value.region,
//         population: value.population,
//         latitude: value.latlng[0],
//         longitude: value.latlng[1]

//       };
//       createcountry(spreadOperator);
      
      
     
//         // console.log(value)
//     })
//   })
  
  
   
// function createcountry({ name, flag, code, capital, region, population,latitude,longitude }) {
   
//   document.body.innerHTML += 
//   ` <div class="container">
//     <div class="card"  >
//     <h1 id="title" class="text-center">${name}</h1>
//     <img src="${flag}" class="flag" alt="${name}'Flag image">
 
//   <div class="card-body car" >
//   <p><span>Population :</span>${population}</p>
//   <p><span>Captial :</span> ${capital}</p>
//   <p><span>Region :</span> ${region}</p>
//   <p><span>Country Code :</span>${code}</p>
//   <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
//  <div id=${name}>   </div>
  
 
//   </div>
// </div>
// </div>
// `
// }



// function block(lat,lng,name){

//   var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`
   
//   console.log(name)
//  fetch(WAPI)
//  .then((response) => response.json())
//  .then((data)=> {

//      alert(`
//                For ${name.id}  
//      Current Humidity is ${data.main.humidity}
//      Current Pressure is ${data.main.pressure}
//      Current Temperature is ${data.main.temp}`)
//     })
// }
  
// document.addEventListener("click",(event) => event.preventDefault())