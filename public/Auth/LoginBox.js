"use strict";
const react_1 = require("react");
require("./style.scss");
const react_bootstrap_1 = require("react-bootstrap");
const LoginBox = ({ isAuthenticated, isFetching, authenticate, logout }) => {
    let email, password;
    let authStatus = isAuthenticated ? 'Authenticated' : 'Not authenticated';
    let loadingSpinner;
    if (isFetching)
        loadingSpinner = (react_1.default.createElement("span", null, "Loading..."));
    let authButton = isAuthenticated
        ? react_1.default.createElement("button", { onClick: logout }, "Logout")
        : react_1.default.createElement("button", { onClick: () => authenticate(email.value, password.value) }, "Authenticate");
    let loginFields;
    if (isAuthenticated) {
        loginFields = react_1.default.createElement("div", { className: "login-fields" });
    }
    else {
        loginFields =
            react_1.default.createElement("div", { className: "login-fields" },
                react_1.default.createElement("input", { className: "form-control", type: "email", ref: node => {
                        email = node;
                    } }),
                react_1.default.createElement("input", { className: "form-control", type: "password", ref: node => {
                        password = node;
                    } }));
    }
    return (react_1.default.createElement("div", { className: "loginbox-container" },
        react_1.default.createElement("div", { className: "loginbox" },
            react_1.default.createElement(react_bootstrap_1.Col, { xs: 12, md: 6, mdOffset: 3 },
                react_1.default.createElement("h2", null, "Login Form"),
                loginFields,
                react_1.default.createElement("p", null,
                    " ",
                    authButton,
                    " "),
                loadingSpinner,
                react_1.default.createElement("p", { className: isAuthenticated ? 'authenticated' : 'not-authenticated' }, authStatus)))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginBox;
//# sourceMappingURL=LoginBox.js.map