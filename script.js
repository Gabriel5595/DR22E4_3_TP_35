const titulo = document.getElementsByTagName("h1")[0];

titulo.setAttribute("onclick", "cliquei()");

function cliquei() {
    titulo.style.background = "blue";
}