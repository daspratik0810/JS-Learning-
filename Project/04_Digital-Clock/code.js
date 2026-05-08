const clock = document.getElementById("clock")

setInterval(function(){
    let date = new Date()
    console.log(date.toLocaleTimeString());
    //clock.innerHTML = date.toLocaleString()  //date and time
    clock.innerHTML = date.toLocaleTimeString()  //only time
},1000)

