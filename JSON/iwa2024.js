fetch("./iwa2024.json").then(function (response) {
    return response.json();
}).then(function (iwa2024) {
    // Seleccionamos el cuerpo de la tabla
    let placeholder = document.querySelector("#data-output");

    // Limpiamos cualquier contenido previo
    placeholder.innerHTML = "";

    // Iteramos sobre los datos para crear filas y celdas
    for (let student of iwa2024) {
        // Crear una fila
        let row = document.createElement("tr");

        // Crear y agregar la celda para el apellido
        let lastNameCell = document.createElement("td");
        lastNameCell.textContent = student.LastName;
        row.appendChild(lastNameCell);

        // Crear y agregar la celda para el nombre
        let firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.FirstName;
        row.appendChild(firstNameCell);

        // Crear y agregar la celda para el email
        let emailCell = document.createElement("td");
        emailCell.textContent = student.Email;
        row.appendChild(emailCell);

        // Crear y agregar la celda para la foto
        let photoCell = document.createElement("td");
        let img = document.createElement("img");
        img.src = student.Photo;
        img.alt = "Photo";
        img.style.width = "50px"; // Ajustar tamaño de la imagen si es necesario
        img.style.height = "50px";
        photoCell.appendChild(img);
        row.appendChild(photoCell);

        // Agregar la fila al cuerpo de la tabla
        placeholder.appendChild(row);
    }
})
    .catch(function (error) {
        console.error("Error al cargar los datos:", error);
    });
