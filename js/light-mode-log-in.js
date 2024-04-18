const btnLightMode = document.getElementById("btnMode") //BOTON DARK/LIGHT MODE 'index.html'
let colorMode = localStorage.getItem("color-mode")

//CLASES 'log-in.html'
const containerPadre = document.getElementsByClassName("containerPadre")[0]
const container = document.getElementsByClassName("container")[0]
const h2Form = document.getElementsByClassName("h2Form")[0]
const submit = document.getElementsByClassName("submit")[0]
const inputUno = document.getElementsByClassName("inputUno")[0]
const inputDos = document.getElementsByClassName("inputDos")[0]
const inputTres = document.getElementsByClassName("inputTres")[0]
const inpUno = document.getElementById("inpUno")
const inpDos = document.getElementById("inpDos")
const inpTres = document.getElementById("inpTres")

//CLASES HEADER
const headerContainer = document.getElementsByClassName("headerContainer")[0]
const btnSearchBar = document.getElementsByClassName("btnSearchBar")[0]
const listaHeader = document.getElementsByClassName("listaHeader")[0]
const navegacionUno = document.getElementById("navegacionUno")
const navegacionDos = document.getElementById("navegacionDos")
const navegacionTres = document.getElementById("navegacionTres")
const navegacionCuatro = document.getElementById("navegacionCuatro")
const navegacionCinco = document.getElementById("navegacionCinco")
const searchTool = document.getElementsByClassName("searchTool")[0]
const searchBar = document.getElementsByClassName("searchBar")[0]
const barraNav = document.getElementsByClassName("barraNav")[0]
const itemNavUno = document.getElementById("itemNavUno")
const itemNavDos = document.getElementById("itemNavDos")
const itemNavTres = document.getElementById("itemNavTres")
const itemNavCuatro = document.getElementById("itemNavCuatro")
const itemNavCinco = document.getElementById("itemNavCinco")
const imgLogo = document.getElementsByClassName("imgLogo")[0]

//CLASES FOOTER
const divListaFooter = document.getElementsByClassName("divListaFooter")[0]
const linkFooterUno = document.getElementById("linkFooterUno")
const linkFooterDos = document.getElementById("linkFooterDos")
const linkFooterTres = document.getElementById("linkFooterTres")
const linkFooterCuatro = document.getElementById("linkFooterCuatro")
const linkFooterCinco = document.getElementById("linkFooterCinco")
const btnMode = document.getElementsByClassName("btnMode")[0]
const footer = document.getElementsByClassName("footer")[0]

if(colorMode === "light-mode"){
    //CLASES 'log-in.html'
    containerPadre.classList.add("containerPadreLightMode")
    container.classList.add("containerLightMode")
    h2Form.classList.add("h2FormLightMode")
    submit.classList.add("submitLightMode")
    inputUno.classList.add("inputLightMode")
    inputDos.classList.add("inputLightMode")
    inputTres.classList.add("inputLightMode")
    inpUno.classList.add("inpLightMode")
    inpDos.classList.add("inpLightMode")
    inpTres.classList.add("inpLightMode")

    //CLASES HEADER
    headerContainer.classList.add("headerContainerLightMode")
    btnSearchBar.classList.add("btnSearchBarLightMode")
    listaHeader.classList.add("listaHeaderLightMode")
    navegacionUno.classList.add("navegacionLightMode")
    navegacionDos.classList.add("navegacionLightMode")
    navegacionTres.classList.add("navegacionLightMode")
    navegacionCuatro.classList.add("navegacionLightMode")
    navegacionCinco.classList.add("navegacionLightMode")
    searchTool.classList.add("searchToolLightMode")
    searchBar.classList.add("searchBarLightMode")
    barraNav.classList.add("barraNavLightMode")
    itemNavUno.classList.add("itemNavLightMode")
    itemNavDos.classList.add("itemNavLightMode")
    itemNavTres.classList.add("itemNavLightMode")
    itemNavCuatro.classList.add("itemNavLightMode")
    itemNavCinco.classList.add("itemNavLightMode")
    imgLogo.classList.add("imgLogoLightMode")

    //CLASES FOOTER
    divListaFooter.classList.add("divListaFooterLightMode")
    linkFooterUno.classList.add("linkFooterLightMode")
    linkFooterDos.classList.add("linkFooterLightMode")
    linkFooterTres.classList.add("linkFooterLightMode")
    linkFooterCuatro.classList.add("linkFooterLightMode")
    linkFooterCinco.classList.add("linkFooterLightMode")
    btnMode.classList.add("btnModeLightMode")
    footer.classList.add("footerLightMode")
}

btnLightMode.addEventListener("click" , () => {
    colorMode = localStorage.getItem("color-mode") //TRAEMOS EL VALOR DE 'color-mode'
    if(colorMode === "dark-mode"){
        localStorage.setItem("color-mode" , "light-mode")
    }else{
        localStorage.setItem("color-mode" , "dark-mode")
    }
    
    //CLASES HEADER
    headerContainer.classList.toggle("headerContainerLightMode")
    btnSearchBar.classList.toggle("btnSearchBarLightMode")
    listaHeader.classList.toggle("listaHeaderLightMode")
    navegacionUno.classList.toggle("navegacionLightMode")
    navegacionDos.classList.toggle("navegacionLightMode")
    navegacionTres.classList.toggle("navegacionLightMode")
    navegacionCuatro.classList.toggle("navegacionLightMode")
    navegacionCinco.classList.toggle("navegacionLightMode")
    searchTool.classList.toggle("searchToolLightMode")
    searchBar.classList.toggle("searchBarLightMode")
    barraNav.classList.toggle("barraNavLightMode")
    itemNavUno.classList.toggle("itemNavLightMode")
    itemNavDos.classList.toggle("itemNavLightMode")
    itemNavTres.classList.toggle("itemNavLightMode")
    itemNavCuatro.classList.toggle("itemNavLightMode")
    itemNavCinco.classList.toggle("itemNavLightMode")
    imgLogo.classList.toggle("imgLogoLightMode")

    //CLASES FOOTER
    divListaFooter.classList.toggle("divListaFooterLightMode")
    linkFooterUno.classList.toggle("linkFooterLightMode")
    linkFooterDos.classList.toggle("linkFooterLightMode")
    linkFooterTres.classList.toggle("linkFooterLightMode")
    linkFooterCuatro.classList.toggle("linkFooterLightMode")
    linkFooterCinco.classList.toggle("linkFooterLightMode")
    btnMode.classList.toggle("btnModeLightMode")
    footer.classList.toggle("footerLightMode")

    //CLASES 'log-in.html'
    containerPadre.classList.toggle("containerPadreLightMode")
    container.classList.toggle("containerLightMode")
    h2Form.classList.toggle("h2FormLightMode")
    submit.classList.toggle("submitLightMode")
    inputUno.classList.toggle("inputLightMode")
    inputDos.classList.toggle("inputLightMode")
    inputTres.classList.toggle("inputLightMode")
    inpUno.classList.toggle("inpLightMode")
    inpDos.classList.toggle("inpLightMode")
    inpTres.classList.toggle("inpLightMode")
})