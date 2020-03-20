function changecolor(){
    var color = document.getElementById('color').value;
    //Change Background Color
    document.body.style.backgroundColor = color;
    localStorage.setItem('color', color)
}
