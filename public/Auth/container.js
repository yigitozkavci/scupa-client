"use strict";
const react_redux_1 = require("react-redux");
const actions_1 = require("./actions");
const LoginBox_1 = require("./LoginBox");
const fetch = require("isomorphic-fetch");
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (email, password) => {
            dispatch(actions_1.requestAuthenticate());
            let loginData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                cache: 'default',
                body: `email=${email}&password=${password}`
            };
            fetch('http://localhost:4000/auth_user', loginData)
                .then(response => {
                if (response.status >= 400) {
                    dispatch(actions_1.receiveUnauthorized());
                }
                else {
                    response.json()
                        .then(resp => {
                        dispatch(actions_1.receiveAuthenticate(resp.auth_token));
                    });
                }
            });
        },
        logout: () => {
            dispatch(actions_1.logout());
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LoginBox_1.default);
//# sourceMappingURL=container.js.map