const bd = document.querySelector("body")
bd.style.backgroundColor = "#ab5c5cb1"

const form= document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const description = document.querySelector("#description")


    if(height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`
    }else {
        const bmi = ( (weight / (height * height ) )*10000).toFixed(2)
        console.log(bmi);
        results.innerHTML =  `${bmi}`
        
        if(bmi<=18.6){
            console.log("Under Weight");
            description.innerHTML = "Unfortunately !! You Are Under Weight"
        }else if(bmi>18.6 && bmi<=24.9){
            console.log("Normal Range");
            description.innerHTML = "Congratulations !! You are in Normal Range"

        }else{
            console.log("Over Weight");
            description.innerHTML = "Unfortunately !! You Are Over Weight"
        }
    }
})
