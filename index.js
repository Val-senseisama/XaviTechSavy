function changeBg(){
    var scrollValue = window.scrollY;
    ;
    if(scrollValue > 200){
        document.getElementById("darken").classList.add('bars')
   bars.classList.add("bars");
    } else {
        document.getElementById("darken").classList.remove('bars')
    }
    console.log(scrollValue);

};

window.addEventListener('scroll', changeBg);
