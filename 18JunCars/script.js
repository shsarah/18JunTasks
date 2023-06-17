let marka=[
    "BMW",
    "Opel",
    "Toyota",
    "Mercedes"
];

let model=[
    ['x5', 'M5', 'x6'],
    ['Astra', 'Vectra'],
    ['Camry', 'Carolla'],
    ['190', 's-class']
]

let picture=[
    ["./images/2024-bmw-x5-107-1675791495.jpg","./images/download.jpeg","/./images/BMW X6 M.jpg"],
    ["./images/91da1cfdbb5bf0e0f997971d4293f6b291819564.jpeg", "./images/Opel_Vectra_front_20080118.jpg"],
    ["./images/2021-toyota-camry-trd-ogi-1.webp", "./images/2023_toyota_corolla_sedan_xse_fq_oem_1_1600.webp"],
    ["./images/Classic & Sports Car – Mercedes-Benz 190 buyer’s guide – LEAD.png", "./images/front-left-side-47.avif"]
];


let markaS=document.getElementById("marka");
let modelS=document.getElementById("model");
let message=document.getElementById("message");

function markaSelect(){
    let data=`<option value="" disable selected>Marka Select</option>`
    for(let i=0;i<marka.length;i++){
        data+=`<option value="${i}">${marka[i]}</option>`
    }
    markaS.innerHTML=data;
}


markaSelect();


function modelSelect(){
    let value=markaS.value;
    let data=`<option value="" disable selected>Model Select</option>`
    for(let i=0;i<model[value].length;i++){
        data+=`<option value=${i}>${model[value][i]}</option>`
    }
    modelS.innerHTML=data;
}

function print(){
    message.innerHTML=`${marka[markaS.value]} ${model[markaS.value][modelS.value]} <img src="${picture[markaS.value][modelS.value]}">`
}

