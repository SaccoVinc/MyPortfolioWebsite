function IsMobile(){
    var larghezzaPagina = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
    );
      
    if(larghezzaPagina > 600){
        return false;
    }else{
        return true;
    }
}

//Eseguito al caricamento della pagina
if(IsMobile() == false){
    timeline.src =  "./Immagini/TimelineIT.png";
}else{
    timeline.src =  "./Immagini/TimelineITVert.png";
}

window.addEventListener("resize", function(){
    if(IsMobile() == false){
        timeline.src =  "./Immagini/TimelineIT.png";
    }else{
        timeline.src =  "./Immagini/TimelineITVert.png";
    }
})