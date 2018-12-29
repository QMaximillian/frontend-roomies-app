const baseHomeUrl = "http://localhost:3001/homes"
const baseUserUrl = "http://localhost:3001/users"
const baseLoginUrl = "http://localhost:3001/login"
const baseUrl = "http://localhost:3001/reauth"
const baseUserHomeUrl = "http://localhost:3001/user_homes"
const baseInviteEmailUrl = "http://localhost:3001/invite_emails"

// export const fetchAddRoomate = () => {
//   return fetch(ba, {})
// }

export const fetchGetHome = (uuid) => {
  return fetch(baseHomeUrl + `/${uuid}`, {
    headers: headers()
  }).then(resp => resp.json())
}

export const fetchSendInviteEmail = (params) => {
  return fetch(baseInviteEmailUrl, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(params)
  }).then(resp => resp.json())
}

export const fetchLoginUser = (body) => {
  return fetch(baseLoginUrl, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify(body)
  }).then(resp => resp.json())
}

export const fetchReauthUser = () => {
  return fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.getItem('token')
    }
  })
  .then(resp => resp.json())
}

export const fetchUser = () =>  {
  return fetch(baseUserUrl).then(resp => resp.json())
}

export const fetchCreateUserHome = (userId, homeId) => {
  return fetch(baseUserHomeUrl, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ user_home: { user_id: userId, home_id: homeId }})
  })
}

export const fetchCurrentUser = (id) => {
  return fetch(baseUserUrl + `/${id}`, {
    method: 'GET',
    headers: headers()
  }).then(resp => resp.json())
}

export const fetchCreateHome = (body) => {
  return fetch(baseHomeUrl, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body)
  }).then(resp => resp.json())
}

export const fetchCreateUser = (body) => {
  return fetch(baseUserUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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
      Accept: 'application/json',
      Authorization: localStorage.getItem('token')
  }
}
