export const fetchUser = () =>  {
  return fetch('https://localhost:3001/users').then(resp => resp,json())
}
