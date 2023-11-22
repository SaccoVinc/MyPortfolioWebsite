//Costanti e variabili
const header = document.querySelector("header");

//0 = italiano, 1 = inglese
let lingua = "italiano";
let bandiera = document.getElementById("flag");

//NavBar
let elements = document.querySelectorAll(".navlink");

//Home
let hi = document.getElementById("Hi");
let iam = document.getElementById("Iam");
let ican = document.getElementById("Ican");
let desc = document.getElementById("desc");
let reach = document.getElementById("reachOut");

//Services
let servTitle = document.getElementById("servTitle");
let servSubtitle = document.getElementById("servSubTitle");
let servTitle2= document.getElementById("servTitle2");
let servTitle3= document.getElementById("servTitle3");
let servTitle4= document.getElementById("servTitle4");
let servDesc1= document.getElementById("servDesc1");
let servDesc2= document.getElementById("servDesc2");
let servDesc3= document.getElementById("servDesc3");
let showMore= document.querySelectorAll(".showMore");

//Career
let careerTitle = document.getElementById("careerTitle");
let careerSubTitle = document.getElementById("careerSubTitle");
let timeline = document.getElementById("timeline");

//ReachMe
let reachTitle = document.getElementById("reachTitle");
let reachSubTitle = document.getElementById("reachSubTitle");
let writeMe = document.getElementById("writeMe");

//Creazione della variabile con tutte le traduzioni
let traduzioni ={
    italiano: {
        Navbar:{
            Home:"Home",
            Services:"Servizi",
            Career:"Carriera",
            Contact:"Contatti"
        },
        Home:{
            Hi:"Ciao, ",
            Iam:"Sono",
            Ican:"Posso <span class='typing'></span>",
            desc:"un ragazzo che ama la programmazione e il foto/video editing, <br> pronto ad offrire le sue conoscenze e abilità!",
            reach:"Ti interessa? Conosciamoci!"
        },
        Services:{
            Title:"I <span>servizi</span> che offro",
            Subtitle:"Cosa posso fare <span>per te?</span>",
            Title2:"Sviluppo App",
            Title3:"Foto/Video Editing",
            Title4:"Sviluppo Web",
            desc1:"Da videogiochi a servizi posso realizzare qualsiasi app <br>per le tue necessità!",
            desc2:"Dalla color correction agli effetti speciali, posso dare alle tue foto <br>il tocco speciale che meritano!",
            desc3:"Se cerchi un sito responsivo e moderno sei nel posto <br>giusto!",
            showMore:"Dimmi di più!"
        },
        Career:{
            Title:"<span>Carriera</span> e <Span>Studi</span>",
            SubTitle:"Il mio <Span>percorso</Span> di crescita"
        },
        Reach:{
            Title:"<Span>Contattami</Span> ora",
            SubTitle:"Non essere timido! <span>Realizza</span> il progetto dei tuoi sogni!",
            writeMe:"Scrivimi un E-Mail a:"
        }
    },
    inglese:{
        Navbar:{
            Home:"Home",
            Services:"Services",
            Career:"Career",
            Contact:"Contacts"
        },
        Home:{
            Hi:"Hi, ",
            Iam:"I'm",
            Ican:"I can <span class='typing'></span>",
            desc:"an Italian guy who loves coding and photo/video editing, <br> ready to offer all his knowledge and skills!",
            reach:"Intrested? Reach Out!"
        },
        Services:{
            Title:"My <span>services</span>",
            Subtitle:"How can I <span>help</span> you?",
            Title2:"App developement",
            Title3:"Foto/Video Editing",
            Title4:"Web developement",
            desc1:"From mobile games <br>to services, I can make<br>any application you need.",
            desc2:"From color correction to VFX,<br>I can give your photos the <br>eye catching look they deserve.",
            desc3:"If your goal is to get a good looking<br>and responsive personal website,<br>you're in the right place!<br>",
            showMore:"Show more!"
        },
        Career:{
            Title:"My <span>Career</span> & <span>studies</span>",
            SubTitle:"My personal <span>growing</span> path"
        },
        Reach:{
            Title:"<span>Reach me</span> now",
            SubTitle:"Don't be shy! <span>Realise</span> your dream project!",
            writeMe:"Write me an E-Mail at:"
        }
    }

}

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

//funzione che cambia le icone delle bandiere
function changeFlag(){

    if(lingua == "italiano"){
        bandiera.src =  "./Immagini/Icone/flag_Italian.png";
        if(IsMobile() == false){
            timeline.src =  "./Immagini/TimelineENG.png";
        }else{
            timeline.src =  "./Immagini/TimelineENGVert.png";
        }
        
        lingua = "inglese";
        options.strings = ['Make your apps!', 'Make your website!', 'Edit your photos!'];

        showMore[0].href = "ExtraLink/CodingEng.html";
        showMore[1].href = "ExtraLink/PhotoEng.html";
        showMore[2].href = "ExtraLink/WebDevEng.html";
    }else{
        bandiera.src =  "./Immagini/Icone/flag_English.png";
        if(IsMobile() == false){
            timeline.src =  "./Immagini/TimelineIT.png";
        }else{
            timeline.src =  "./Immagini/TimelineITVert.png";
        }
        lingua = "italiano";
        options.strings = ['Creare la tua app!', 'Creare il tuo sito web!', 'Modificare le tue foto!'];

        showMore[0].href = "ExtraLink/CodingIt.html";
        showMore[1].href = "ExtraLink/PhotoIt.html";
        showMore[2].href = "ExtraLink/WebDevIt.html";
    }

    elements[0].textContent = traduzioni[lingua].Navbar.Home;
    elements[1].textContent = traduzioni[lingua].Navbar.Services;
    elements[2].textContent = traduzioni[lingua].Navbar.Career;
    elements[3].textContent = traduzioni[lingua].Navbar.Contact;
    
    hi.innerHTML = traduzioni[lingua].Home.Hi;
    iam.innerHTML = traduzioni[lingua].Home.Iam;
    ican.innerHTML = traduzioni[lingua].Home.Ican;
    desc.innerHTML = traduzioni[lingua].Home.desc;
    reach.innerHTML = traduzioni[lingua].Home.reach;
    var typed = new Typed('.typing', options);
    
    servTitle.innerHTML = traduzioni[lingua].Services.Title;
    servSubtitle.innerHTML = traduzioni[lingua].Services.Subtitle;
    servTitle2.innerHTML = traduzioni[lingua].Services.Title2;
    servTitle4.innerHTML = traduzioni[lingua].Services.Title4;
    servDesc1.innerHTML = traduzioni[lingua].Services.desc1;
    servDesc2.innerHTML = traduzioni[lingua].Services.desc2;
    servDesc3.innerHTML = traduzioni[lingua].Services.desc3;
    console.log(showMore[0]);
    showMore.forEach(button => {
        button.innerHTML = traduzioni[lingua].Services.showMore;
    });

    careerTitle.innerHTML = traduzioni[lingua].Career.Title;
    careerSubTitle.innerHTML = traduzioni[lingua].Career.SubTitle;

    reachTitle.innerHTML = traduzioni[lingua].Reach.Title;
    reachSubTitle.innerHTML = traduzioni[lingua].Reach.SubTitle;
    writeMe.innerHTML = traduzioni[lingua].Reach.writeMe;
    

}

//Se l' utente scrolla aggiunge la classe "Sticky" alla navbar 
window.addEventListener("scroll", function(){
    if(IsMobile() == false){
        header.classList.toggle("sticky", this.window.scrollY > 70);
    }
})

//Animazione della scritta nella home
var options = {
    strings: ['Creare la tua app!', 'Creare il tuo sito web!', 'Modificare le tue foto!'],
    typeSpeed: 40,
    backSpeed: 80,
    loop: true
};

var typed = new Typed('.typing', options);

//Per il menù
var bar = document.getElementById("navlist");

function openMenu(){
    bar.style.right = "0";
}
function closeMenu(){
    bar.style.right = "-170px";
}