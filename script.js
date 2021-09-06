
var y;

m=0;

function start(){

    y=setInterval(run,100);

    function run(){
        if(m>1200){
            clearInterval(y);
            m=0;
        }
        m+=19;
        var car=document.getElementById('img');
        car.style.marginLeft=m+'px';
    }
}

function stop(){
    clearInterval(y);
}
