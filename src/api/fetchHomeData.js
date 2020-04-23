export const fetchHomeData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    //const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};