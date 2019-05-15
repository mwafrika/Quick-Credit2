document.querySelector('.open-nav').addEventListener('click',function(e){
    var sidebar = document.querySelector('#mySidenav');
    if(sidebar.getAttribute('data-state') === 'closed'){
        sidebar.setAttribute('data-state','opened');
        e.target.innerHTML = '&times;';
        openNav();
    }
    else{
        sidebar.setAttribute('data-state','closed');
        e.target.innerHTML = '&#9776;';
        closeNav();
    }
});

function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementsById("avatar_m").style.marginLeft ="250px";
  document.body.style.backgroundColor = "#fff";
  document.getElementById("pictures").style.width ="50px";
  document.getElementById("pictures").style.height ="50px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementsById("avatar_m").style.marginLeft ="0";
  document.body.style.backgroundColor = "white";
}