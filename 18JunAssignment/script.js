

function table(){

    let first=[];
    let last=[];
    let rdm;
    let number=0;


    for(let i=0;i<16;i++){
    first[i]=i+1;
    }

    for(let i=0;i<16;i++){
    rdm=Math.floor(Math.random() * first.length);
    last[i]=first[rdm];
    first.splice(rdm,1);
    }

    let tbl=document.getElementById("tbl");

    let data='';
    for(let i=0;i<4;i++){
        data+=`<tr>`;

        for(let j=0;j<4;j++){
            data+=`<td id="td" onclick="playGame(${last[number]},${number})">${last[number]}</td>`;
            number++;
        }

        data+=`</tr>`
    }

    tbl.innerHTML=data;
}





function playGame(number,index){
    let count=1;
    let td=document.getElementsByTagName("td")[index];
    if(count==number){
        td.style.backgroundColor="green";
        count++;
    }

}