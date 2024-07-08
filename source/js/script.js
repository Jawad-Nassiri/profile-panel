// const btnElements = document.querySelectorAll('button.btn');

// btnElements.forEach(function(btn){
//     btn.addEventListener('click', function(){
//         let btnColor = btn.getAttribute('data-color');

//         document.documentElement.style.setProperty('--theme-color', btnColor);
//     })
// })


/////////////////////////////////////////////////////////////////////



const btnElements = document.querySelectorAll('button.btn');

btnElements.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let btnColor = e.target.dataset.color;

        document.documentElement.style.setProperty('--theme-color', btnColor);
    })
})