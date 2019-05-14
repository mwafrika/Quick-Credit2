

function pickDate(){
    if(!Modernizr.inputtypes.date){
        document.getElementById("datepicker").datepicker();
        ('input[type=date]').datepicker();
    }
}
document.querySelector('datepicker').addEventListener('click',function(e){
    e.target.innerHTML ='datepicker';
    pickDate();
});