function showAlert(){
    let result = confirm ('Are you sure?');
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