export const fetchHomeData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    //const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //const response = await fetch("http://localhost:3400/getUsers");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};