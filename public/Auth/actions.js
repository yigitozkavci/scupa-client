"use strict";
exports.requestAuthenticate = () => {
    return {
        type: 'REQUEST_AUTHENTICATE'
    };
};
exports.receiveUnauthorized = () => {
    return {
        type: 'RECEIVE_UNAUTHORIZED'
    };
};
exports.receiveAuthenticate = (token) => {
    return {
        type: 'RECEIVE_AUTHENTICATE',
        data: {
            token
        }
    };
};
exports.logout = () => {
    return {
        type: 'LOGOUT'
    };
};
//# sourceMappingURL=actions.js.map