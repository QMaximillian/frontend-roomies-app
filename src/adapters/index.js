const baseHomeUrl = "http://localhost:3001/homes"

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
  })
}

const headers = (method, body) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(body)
  }
}
