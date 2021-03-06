/// <reference path="./typings.d.ts" />

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

export const receiveAuthenticate = (token: string) => {
  return {
    type: 'RECEIVE_AUTHENTICATE',
    data: {
      token
    }
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
