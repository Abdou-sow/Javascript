var heure =0 ;
var minute = 0 ;
function time(seconde){
    if(seconde>=60 && seconde<3600){
        minute=Math.floor(seconde/60);
        seconde=seconde%60;
        console.log(heure+":"+minute+":"+seconde);
    }
    else if(seconde>=3600){
        minute=Math.floor(seconde/60);
        seconde=seconde%60;
        heure=Math.floor(minute/60);
        minute=minute%60;
        console.log(heure+":"+minute+":"+seconde);
    }
    else{
        console.log(heure+":"+minute+":"+seconde);
    }
}
time(3700)
