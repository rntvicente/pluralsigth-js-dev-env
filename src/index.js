import { getUsers, deleteUser } from './api/userApi'

getUsers().then(result => {
  let usersBody = '';

  result.forEach(user => {
    usersBody += `
      <tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.id}</td>
        <td>
          <a href="#" data-id="${user.id}" class="delete">Delete</a>
        </td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('delete');

  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
});
});
