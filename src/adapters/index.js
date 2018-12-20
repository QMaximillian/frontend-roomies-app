const baseHomeUrl = "http://localhost:3001/homes"
const baseUserUrl = "http://localhost:3001/users"
const baseLoginUrl = "http://localhost:3001/login"

export const fetchLoginActor = (body) => {
  return fetch(baseLoginUrl, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body)
  }).then(resp => resp.json())
}

export const fetchUser = () =>  {
  return fetch('https://localhost:3001/users').then(resp => resp.json())
}

export const fetchCreateHome = (e, body) => {
  e.preventDefault()
  return fetch(baseHomeUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(resp => resp.json())
}

export const fetchCreateUser = (body) => {
  return fetch(baseUserUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(resp => resp.json())
}


// const headers = (method, body) => {
//   return {
//     method: method,
//     headers: {
//       'Content-Type': 'application/json'
//
//     },
//     body: JSON.stringify(body)
//   }
// }

const headers = () => {
  return {
      'Content-Type': 'application/json',
      Accept: 'application/json'
  }
}
