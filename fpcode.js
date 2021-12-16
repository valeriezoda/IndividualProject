let count = 0;

const Super = {
"0000": "Total nonfarm",
"0500": "Total private",
"0600": "Goods-producing",
"0700": "Service-providing",
"0800": "Private service-providing",
"1000": "Mining and logging",
"2000": "Construction",
"3000": "Manufacturing",
"3100": "Durable Goods",
"3200": "Nondurable Goods",
"4000": "Trade, transportation, and utilities",
"4142": "Wholesale trade",
"4200": "Retail trade",
"4300": "Transportation and warehousing",
"4422": "Utilities",
"5000": "Information",
"5500": "Financial activities",
"6000": "Professional and business services",
"6500": "Education and health services",
"7000": "Leisure and hospitality",
"8000": "Other services",
"9000": "Government"
};
let SuperKeys = Object.keys(Super);


const CHART_COLORS = {
red: 'rgb(255, 99, 132)',
orange: 'rgb(255, 159, 64)',
yellow: 'rgb(255, 205, 86)',
green: 'rgb(75, 192, 192)',
blue: 'rgb(54, 162, 235)',
purple: 'rgb(153, 102, 255)',
grey: 'rgb(201, 203, 207)',
pink: 'rgb(246, 152, 193)',
lilac: 'rgb(218, 199, 255)',
burntorange: 'rgb(247, 124, 0)',
royalblue: 'rgb(30, 51, 238)',
neonblue: 'rgb(86, 237, 242)',
neongreen: 'rgb(59, 255, 37)',
burgundy: 'rgb(178, 61, 52)',
hotpink: 'rgb(255, 0, 128)',
teal: 'rgb(65, 225, 214)',
forestgreen: 'rbg(98, 168, 37)',
navyblue: 'rgb(13, 81, 158)',
brown: 'rgb(158, 95, 13)',
tan: 'rgb(250, 171, 118)',
mustard: 'rgb(209, 177, 19)',
neonpurple: 'rgb(255, 0, 247)'
};
let CHART_COLORS_KEYS = Object.keys(CHART_COLORS);
 
const CHART_COLORS_50_Percent = {
red: 'rgba(255, 99, 132, 0.5)',
orange: 'rgba(255, 159, 64, 0.5)',
yellow: 'rgba(255, 205, 86, 0.5)',
green: 'rgba(75, 192, 192, 0.5)',
blue: 'rgba(54, 162, 235, 0.5)',
purple: 'rgba(153, 102, 255, 0.5)',
grey: 'rgba(201, 203, 207, 0.5)',
pink: 'rgba(246, 152, 193, 0.5)',
lilac: 'rgba(218, 199, 255, 0.5)',
burntorange: 'rgba(247, 124, 0, 0.5)',
royalblue: 'rgba(30, 51, 238, 0.5)',
neonblue: 'rgba(86, 237, 242, 0.5)',
neongreen: 'rgba(59, 255, 37, 0.5)',
burgundy: 'rgba(178, 61, 52, 0.5)',
hotpink: 'rgba(255, 0, 128, 0.5)',
teal: 'rgba(65, 255, 214, 0.5)',
forestgreen: 'rgba(98, 168, 37, 0.5)',
navyblue: 'rgba(13, 81, 158, 0.5)',
brown: 'rgba(158, 95, 13, 0.5)',
tan: 'rgba(250, 171, 118, 0.5)',
mustard: 'rgba(209, 177, 19, 0.5)',
neonpurple: 'rgba(255, 0, 247, 0.5)'
};
let CHART_COLORS_50_Percent_KEY = Object.keys(CHART_COLORS_50_Percent);

let flag = false; 
function responseHandler() {
  if (this.status == 200) {
    let dataArray = this.response.Results.series[0].data;
  let seriesID = this.response.Results.series[0].seriesID;
    let sectorline = {
      label: "",
      data:[],
      borderColor: "",
      backgroundColor: "",
      hidden:true
}
sectorline.label = (Super[seriesID.substring(3,7)]);
sectorline.borderColor = (CHART_COLORS_KEYS[count]);
sectorline.backgroundColor = (CHART_COLORS_50_Percent_KEY[count]);
if(flag == false){
  for (let i = dataArray.length -1; i >= 0; i--) { 
    data.labels.push(dataArray[i].periodName + " " + dataArray[i].year);
    flag = true; 
}}
for(let i = dataArray.length -1; i >= 0; i--) {
sectorline.data.push(dataArray[i].value); 

}

data.datasets.push(sectorline);
count++

  console.log(this.response);
  }else {
   console.log ("error");
   }
}


  const data = {
    labels: [],
    datasets: []
  };

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Employees in Thousands: US Labor Stats'
      }
    }
  }
};


const myChart = new Chart(
  document.getElementById('myChart'),
    config);


for (i = 0; i < SuperKeys.length; i++){
let hold = new XMLHttpRequest()
hold.addEventListener("load", responseHandler);
let x = "https://api.bls.gov/publicAPI/v2/timeseries/data/CEU";
// add personal API index: let z = "000001?registrationkey=245bd84812f34c6b89356c491e78dcca";
hold.open("GET", x + SuperKeys[i] + z);
hold.responseType = "json";
hold.send();
}
