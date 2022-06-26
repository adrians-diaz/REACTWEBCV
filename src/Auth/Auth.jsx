
 import axios from "axios";
 
 const getusers = async () => {
  const BASEURL = "http://localhost:8069";
  const usersAPI = await axios.get(`${BASEURL}/users`);

  return usersAPI.data.Users;
  
};
const users = getusers();
console.log(users); 
  
  export const login = ({ email, password }) => {
    const user = users.find(
      (user) => user.username === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  };