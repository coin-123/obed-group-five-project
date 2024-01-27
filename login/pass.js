
// let spa=document.querySelector(".spam")
// let checker = document.querySelector(".chec")
// let display = document.querySelector(".pass")
toStopRefresh = document.querySelector('.nue')


// checker.addEventListener("click", function () {
//     // display.type = "password"

//     if (checker.checked ){
//         display.type = "text"
//         spa.innerHTML = "hide password"
//     }else{
//         display.type = "password"
//         spa.innerHTML="show password"
//     }


//     // console.log(display.value)
// })



// let forgotpasswrd =document.querySelector("#forgot")

// forgotpasswrd.addEventListener('submit', e => {
//     e.preventDefault ()
// })


toStopRefresh.addEventListener('click', function (event){
    event.preventDefault();
    // console.log('button clicked, but the page wont refresh')
})
