const btnLightMode = document.getElementById("btnMode") //BOTON DARK/LIGHT MODE 'index.html'
let colorMode = localStorage.getItem("color-mode") //CREAMOS VARIABLE PARA EL LOCAL STORAGE
if(!colorMode){ //SETEAMOS POR DEFAULT POR PRIMERA VEZ
    localStorage.setItem("color-mode" , "dark-mode")
}

//CLASES QUE CAMBIAN SU COLOR
//CLASES GLOBALES
const hrFooter = document.getElementById("hrFooter")
const hrMain = document.getElementById("hrMain")

//CLASES/ID'S HEADER
const headerContainer = document.getElementsByClassName("headerContainer")[0]
const btnSearchBar = document.getElementsByClassName("btnSearchBar")[0]
const listaHeader = document.getElementsByClassName("listaHeader")[0]
const searchTool = document.getElementsByClassName("searchTool")[0]
const searchBar = document.getElementsByClassName("searchBar")[0]
const barraNav = document.getElementsByClassName("barraNav")[0]
const imgLogo = document.getElementsByClassName("imgLogo")[0]
const navegacionUno = document.getElementById("navegacionUno")
const navegacionDos = document.getElementById("navegacionDos")
const navegacionTres = document.getElementById("navegacionTres")
const navegacionCuatro = document.getElementById("navegacionCuatro")
const navegacionCinco = document.getElementById("navegacionCinco")
const itemNavUno = document.getElementById("itemNavUno")
const itemNavDos = document.getElementById("itemNavDos")
const itemNavTres = document.getElementById("itemNavTres")
const itemNavCuatro = document.getElementById("itemNavCuatro")
const itemNavCinco = document.getElementById("itemNavCinco")

//CLASES/ID'S FOOTER
const divListaFooter = document.getElementsByClassName("divListaFooter")[0]
const linkFooterUno = document.getElementById("linkFooterUno")
const linkFooterDos = document.getElementById("linkFooterDos")
const linkFooterTres = document.getElementById("linkFooterTres")
const linkFooterCuatro = document.getElementById("linkFooterCuatro")
const linkFooterCinco = document.getElementById("linkFooterCinco")
const btnMode = document.getElementsByClassName("btnMode")[0]
const footer = document.getElementsByClassName("footer")[0]

//CLASES/ID'S 'index.html'
const nombreProductoUno = document.getElementById("nombreProductoUno")
const nombreProductoDos = document.getElementById("nombreProductoDos")
const nombreProductoTres = document.getElementById("nombreProductoTres")
const nombreProductoCuatro = document.getElementById("nombreProductoCuatro")
const nombreProductoCinco= document.getElementById("nombreProductoCinco")
const nombreProductoSeis = document.getElementById("nombreProductoSeis")
const precioProductoUno = document.getElementById("precioProductoUno")
const precioProductoDos = document.getElementById("precioProductoDos")
const precioProductoTres = document.getElementById("precioProductoTres")
const precioProductoCuatro = document.getElementById("precioProductoCuatro")
const precioProductoCinco = document.getElementById("precioProductoCinco")
const precioProductoSeis = document.getElementById("precioProductoSeis")
const btnComprarUno = document.getElementById("btnComprarUno")
const btnComprarDos = document.getElementById("btnComprarDos")
const btnComprarTres = document.getElementById("btnComprarTres")
const btnComprarCuatro = document.getElementById("btnComprarCuatro")
const btnComprarCinco = document.getElementById("btnComprarCinco")
const btnComprarSeis = document.getElementById("btnComprarSeis")
const productos = document.getElementsByClassName("productos")[0]
const productoUno = document.getElementById("productoUno")
const productoDos = document.getElementById("productoDos")
const productoTres = document.getElementById("productoTres")
const productoCuatro = document.getElementById("productoCuatro")
const productoCinco = document.getElementById("productoCinco")
const productoSeis = document.getElementById("productoSeis")
const main = document.getElementsByClassName("main")[0]




if(colorMode === "light-mode"){
    //CLASES GLOBALES
    hrFooter.classList.add("hrFooterLightMode")
    hrMain.classList.add("hrMainLightMode")

    //CLASES/ID'S HEADER
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

    //CLASES/ID'S FOOTER
    divListaFooter.classList.add("divListaFooterLightMode")
    linkFooterUno.classList.add("linkFooterLightMode")
    linkFooterDos.classList.add("linkFooterLightMode")
    linkFooterTres.classList.add("linkFooterLightMode")
    linkFooterCuatro.classList.add("linkFooterLightMode")
    linkFooterCinco.classList.add("linkFooterLightMode")
    btnMode.classList.add("btnModeLightMode")
    footer.classList.add("footerLightMode")

    //CLASES/ID'S 'index.html'
    nombreProductoUno.classList.add("nombreProductoLightMode")
    nombreProductoDos.classList.add("nombreProductoLightMode")
    nombreProductoTres.classList.add("nombreProductoLightMode")
    nombreProductoCuatro.classList.add("nombreProductoLightMode")
    nombreProductoCinco.classList.add("nombreProductoLightMode")
    nombreProductoSeis.classList.add("nombreProductoLightMode")
    precioProductoUno.classList.add("precioProductoLightMode")
    precioProductoDos.classList.add("precioProductoLightMode")
    precioProductoTres.classList.add("precioProductoLightMode")
    precioProductoCuatro.classList.add("precioProductoLightMode")
    precioProductoCinco.classList.add("precioProductoLightMode")
    precioProductoSeis.classList.add("precioProductoLightMode")
    btnComprarUno.classList.add("btnComprarLightMode")
    btnComprarDos.classList.add("btnComprarLightMode")
    btnComprarTres.classList.add("btnComprarLightMode")
    btnComprarCuatro.classList.add("btnComprarLightMode")
    btnComprarCinco.classList.add("btnComprarLightMode")
    btnComprarSeis.classList.add("btnComprarLightMode")
    productos.classList.add("productosLightMode")
    productoUno.classList.add("productoLightMode")
    productoDos.classList.add("productoLightMode")
    productoTres.classList.add("productoLightMode")
    productoCuatro.classList.add("productoLightMode")
    productoCinco.classList.add("productoLightMode")
    productoSeis.classList.add("productoLightMode")
    main.classList.add("mainLightMode")


}

btnLightMode.addEventListener("click" , () => {
    colorMode = localStorage.getItem("color-mode") //TRAEMOS EL VALOR DE 'color-mode'
    if(colorMode === "dark-mode"){
        localStorage.setItem("color-mode" , "light-mode")
    }else{
        localStorage.setItem("color-mode" , "dark-mode")
    }
    
    //CLASES GLOBALES
    hrFooter.classList.toggle("hrFooterLightMode")
    hrMain.classList.toggle("hrMainLightMode")

    //CLASES/ID'S HEADER
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

    //CLASES/ID'S FOOTER
    divListaFooter.classList.toggle("divListaFooterLightMode")
    linkFooterUno.classList.toggle("linkFooterLightMode")
    linkFooterDos.classList.toggle("linkFooterLightMode")
    linkFooterTres.classList.toggle("linkFooterLightMode")
    linkFooterCuatro.classList.toggle("linkFooterLightMode")
    linkFooterCinco.classList.toggle("linkFooterLightMode")
    btnMode.classList.toggle("btnModeLightMode")
    footer.classList.toggle("footerLightMode")

    //CLASES/ID'S 'index.html'
    nombreProductoUno.classList.toggle("nombreProductoLightMode")
    nombreProductoDos.classList.toggle("nombreProductoLightMode")
    nombreProductoTres.classList.toggle("nombreProductoLightMode")
    nombreProductoCuatro.classList.toggle("nombreProductoLightMode")
    nombreProductoCinco.classList.toggle("nombreProductoLightMode")
    nombreProductoSeis.classList.toggle("nombreProductoLightMode")
    precioProductoUno.classList.toggle("precioProductoLightMode")
    precioProductoDos.classList.toggle("precioProductoLightMode")
    precioProductoTres.classList.toggle("precioProductoLightMode")
    precioProductoCuatro.classList.toggle("precioProductoLightMode")
    precioProductoCinco.classList.toggle("precioProductoLightMode")
    precioProductoSeis.classList.toggle("precioProductoLightMode")
    btnComprarUno.classList.toggle("btnComprarLightMode")
    btnComprarDos.classList.toggle("btnComprarLightMode")
    btnComprarTres.classList.toggle("btnComprarLightMode")
    btnComprarCuatro.classList.toggle("btnComprarLightMode")
    btnComprarCinco.classList.toggle("btnComprarLightMode")
    btnComprarSeis.classList.toggle("btnComprarLightMode")
    productos.classList.toggle("productosLightMode")
    productoUno.classList.toggle("productoLightMode")
    productoDos.classList.toggle("productoLightMode")
    productoTres.classList.toggle("productoLightMode")
    productoCuatro.classList.toggle("productoLightMode")
    productoCinco.classList.toggle("productoLightMode")
    productoSeis.classList.toggle("productoLightMode")
    main.classList.toggle("mainLightMode")
})