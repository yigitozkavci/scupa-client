export const requestAuthenticate = () => {
  return {
    type: 'REQUEST_AUTHENTICATE'
  }
}

export const receiveUnauthorized = () => {
  return {
    type: 'RECEIVE_UNAUTHORIZED'
  }
}

export const receiveAuthenticate = (token) => {
  return {
    type: 'RECEIVE_AUTHENTICATE',
    data: {
      token
    }
  }
}
