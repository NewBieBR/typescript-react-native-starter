const apiEntry = 'https://jsonplaceholder.typicode.com';
const usersNamespace = 'users';

export default class JSONPlacholderAPI {
  static apiEntry = apiEntry;
  static usersNamespace = usersNamespace;

  static async fetchUser(userID: any) {
    const url = `${apiEntry}/${usersNamespace}/${userID}`;
    return fetch(url).then(response => response.json());
  }
}
