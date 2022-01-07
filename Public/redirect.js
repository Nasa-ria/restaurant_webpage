
// function that redirect the page.ejs to the home page after 5 secs

// 1.using the windows settimer 
// setTimeout(function(){
//     window.location.href='/'
// },5000);

// 2.using the settimer where there   will be a countdown when the timer set in
// grap the timer
const timer = document.querySelector("#timer")
let timeout = 5
timer.textContent = timeout
 let count = setInterval(()=>{
timeout = timeout -1
timer.textContent = timeout;
if (timeout==0){
   
    clearInterval(count)
    window.location.href='/'

}
},1000)
