// burger menu

var menu = document.querySelector('#menu-burger')

var stateNav = false
// ajouter un evenement click qui detectera l'evenement au moment du click
menu.addEventListener("click",(e) =>{
    if(stateNav == false){
        let nav = document.querySelector('.navbar-nav')
    nav.style.top = '47px'
        stateNav = true
    }else{
        let nav = document.querySelector('.navbar-nav')
        // nav.style.display = "none"
        nav.style.top = "-150px"
        stateNav = false
    }
}, false)

// loader

// loader end




//ajax request

//end ajax request




