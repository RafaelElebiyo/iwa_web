fetch("iwa2024.json")
.then(function(response){
 return response.json();
})
.then(function(iwa2024){
 let placeholder = document.querySelector("#data-output");
let out = "";
 for(let student of iwa2024){
 out += `
  <tr>
      <td>${student.LastName}</td>
      <td>${student.FirstName}</td>
      <td>${student.Email}</td>
      <td> <img src='  ${student.Photo}'> </td>
  </tr>
 `;
 }
 placeholder.innerHTML = out;
});
