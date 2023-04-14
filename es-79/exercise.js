const user = {
  id: 1,
  name: "John",
  age: 25,
};
const userT = JSON.stringify(user)
localStorage.setItem(key,userT)
