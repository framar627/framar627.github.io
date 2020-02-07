function show_pancakes_msg (){
    var d = new Date();
    var message = document.getElementsByClassName("pancakes")[0];
    if (d.getDay() == 5){
    message.style.display = "block";
    }
    else {
    message.style.display = "none";
    }
}