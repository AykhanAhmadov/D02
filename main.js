const boxes = document.querySelector(".boxes");
const cityName = document.querySelector(".city__name");
const villages = document.querySelector(".villages");
const aCity = document.querySelector(".city__a");
const commonVil = document.querySelector(".common__villages");
let Karabakh = [
  {
    city: "Füzuli",
    returnedVillages: 53,
  },
  {
    city: "Cəbrayıl",
    returnedVillages: 90,
  },
  {
    city: "Zəngilan",
    returnedVillages: 52,
  },
  {
    city: "Xocavənd",
    returnedVillages: 35,
    returnedSettlement: 1,
  },
  {
    city: "Qubadlı",
    returnedVillages: 41,
  },
  {
    city: "Xocalı",
    returnedVillages: 9,
  },
  {
    city: "Şuşa",
    returnedVillages: 0
  },
  {
    city: "Laçın",
    returnedVillages: 3,
  },
];

let count = 0;
let bigCity = "";
let cityLength = 0;
let lengthCityVillages = 0;
let cityArr = [];
let commonVillages = 0;

for (let i = 0; i < Karabakh.length; i++) {
  let test = `
        <div class="col-lg-3 box">
            <h3>Şəhər: ${Karabakh[i].city}</h3>
            <h3>Kənd: ${Karabakh[i].returnedVillages}</h3>
        </div>
    `;

  boxes.innerHTML += test;

  if (count < Karabakh[i].returnedVillages) {
    count = Karabakh[i].returnedVillages;
    bigCity = Karabakh[i].city;
  }

  if(cityLength < Karabakh[i].city.length){
    cityLength = Karabakh[i].city.length
    lengthCityVillages = Karabakh[i].returnedVillages
  }
  if(Karabakh[i].city.includes("a")){
    cityArr.push(" "+Karabakh[i].city)
  }
  commonVillages+=Karabakh[i].returnedVillages
}

function bigCityFunc() {
  cityName.innerText = " - " + bigCity
}

function longCityVillages(){
    villages.innerText = " - " + lengthCityVillages
}

function cityA(){
    aCity.innerText = " - " + "[ " + cityArr + " ]"
}

function commonVill(){
    commonVil.innerText = " - " + commonVillages
}