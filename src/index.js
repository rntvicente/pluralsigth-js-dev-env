import { getUsers } from './api/userApi'


getUsers().then(result => {
  let usersBody = '';

  result.forEach(user => {
    usersBody += `
      <tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td
        <td>${user.email}</td
        <td>${user.id}</td
        <td<a>href="#" data-id="${user.id}" class="delete"</a>Delete</td>
      </tr>
    `;
  });

  global.decodeURIComponent.getElementById('users').innerHtml = usersBody;
});
