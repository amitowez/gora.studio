
const users = [{
  Email: "gora@studio.ru",
  Password: "2024",
}]; // типо это бэк)

export async function LogIn(data){
  const result = users.find(item => item.Password === data.Password && item.Email === data.Email);
  if(result){
    return true;
  }
  return false;
}
