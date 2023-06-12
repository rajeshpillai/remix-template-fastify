const resp = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await resp.json();
console.log("Loading users...");
export default data;