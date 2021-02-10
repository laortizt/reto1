//se crea un array con esa lista panel
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
     
    panel.addEventListener('click', () => {
        removeActiveClasses();//llama la función
        panel.classList.add("active");
    });

});

//para cada panel remueveactivar clases
function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

