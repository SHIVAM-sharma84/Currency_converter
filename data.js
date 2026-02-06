const cuntry =document.querySelectorAll(".dropdown select");
const btn =document.querySelector("button");
let info = document.querySelector("#change_rate");



for (let select of cuntry){
    for (let cuntrylist in countryList){
        let newOption =document.createElement("option");
        newOption.innerText = cuntrylist;
        newOption.value = cuntrylist;
        
        if(select.name ==="from" && cuntrylist ==="USD"){
            newOption.selected = "selected";
        }
        else if(select.name ==="to" && cuntrylist ==="INR"){
            newOption.selected = "selected";
        }
        
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
            updateFlage(evt.target);
        });
}

const updateFlage = (element)=>{
    let cuntrylist = element.value;
    let cuntrycode = countryList[cuntrylist];
    let flage = `https://flagsapi.com/${cuntrycode}/flat/64.png`; 
    let newFlage = element.parentElement.querySelector("img");
    newFlage.src = flage;
}
btn.addEventListener("click",async(evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal);
    let from = document.querySelector("#cun_1").value.toLowerCase();
    let to = document.querySelector("#cun_2").value.toLowerCase();
    const cal = document.querySelector("#amount").value;
    
    if (amtVal === "" && amtVal < 1){
        amtVal = 1;
        amtVal.value = "1";
    }

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
    .then(res => res.json())
    .then(data => {
        const rate = data[from][to];
        info.innerText = (`${cal} ${from.toUpperCase()} = ${rate*cal} ${to.toUpperCase()}`);
        console.log(`${cal} ${from.toUpperCase()} = ${rate*cal} ${to.toUpperCase()}`);
        // console.log(`${from.toUpperCase()} → ${to.toUpperCase()}:`, rate*cal);
    });

});





