const formacionAcademica = [
    {icon:"school", 
    titulo: "Estudiante de Ingeniería en Computación (UCC)", 
    texto: "Formación en programación, sistemas, arquitectura y tecnologías"}
]

formacionAcademica.forEach(i => {
    const contendor = document.getElementById("contenedor-academico")
    const div = document.createElement('div')
    div.innerHTML = `
       <i class="material-icons">${i.icon}</i>
       <h3>${i.titulo}</h3>
       <p>${i.texto}</p>
    `
    div.className="knowledge-item"
    contendor.appendChild(div)
});
