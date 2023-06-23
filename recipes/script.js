let color = ["#7d2ae2", "#e2e2e2", "#7296f5"];
let changeColor = document.getElementById('changeColor');
changeColor.addEventListener('click', function(){
    let randomColor = color[Math.floor(Math.random()*color.length)];
    document.body.style.background = randomColor;
});

function showAlert(){
    let result = confirm ('Are you sure you want to go back to main menu?');
    if (result == false) {
        event.preventDefault();
    }
}

function myFunction(){
    let result = confirm ('Do you want to see original recipe?');
    if (result == false){
        event.preventDefault();
    }
}

