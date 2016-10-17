import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: 'cory-house',
    firstname: 'Cory',
    lastname: 'House',
    username: 'cory-house',
    password: 'Test1234',
    phone: '1231234455'
  },
  {
    id: 'scott-allen',
    firstname: 'Scott',
    lastname: 'Allen',
    username: 'scott-allen',
    password: 'Test1234',
    phone: '7771234455'
  },
  {
    id: 'dan-wahlin',
    firstname: 'Dan',
    lastname: 'Wahlin',
    username: 'dan-wahlin',
    password: 'Test1234',
    phone: '5551234455'

  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return user.firstname.toLowerCase() + '-' + user.lastname.toLowerCase();
};

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
	user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUserNameLength =2;
        if (user.firstname.length < minUserNameLength) {
          reject(`First Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.lastname.length < minUserNameLength) {
          reject(`Last Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.id) {
          const existingUserIndex = users.findIndex(a => a.id == user.id);
          users.splice(existingUserIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new users in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          user.id = generateId(user);
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }

  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToDelete = users.findIndex(user => {
          user.userId == userId;
        });
        users.splice(indexOfUserToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default UserApi;
