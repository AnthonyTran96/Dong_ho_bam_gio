window.onload=function(){
    let StartBtn=document.getElementById("Start");
    let StopBtn=document.getElementById("Stop");
    let ResetBtn=document.getElementById("Reset");
    let second=document.getElementById("second");
    let ms=document.getElementById("ms"); 
    let sd=00;
    let tens=00;
    let Interval;
    StartBtn.onclick = function(){
       clearInterval(Interval);
       Interval=setInterval(setTime,10);
    };
    StopBtn.onclick = function(){
        clearInterval(Interval);
    };
    ResetBtn.onclick=function(){
        clearInterval(Interval);
        sd=00;
        tens=00;
        second.innerText="00";
        ms.innerText="00";
    };
    function setTime(){
        tens++;
        if(tens<=9) {
            ms.innerText="0"+tens;
        }else{
            if(tens<=99){
                ms.innerText=tens;
            }else{
                tens=0;
                ms.innerText="00";
                sd++;
                if(sd<=9){
                    second.innerText="0"+sd;
                }else{
                    second.innerText=sd;
                }
            }
        }
    };
}
