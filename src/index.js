import { getUsers } from './api/userApi'
import './index.css';

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
});
