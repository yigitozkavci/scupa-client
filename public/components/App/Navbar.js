"use strict";
const React = require("react");
const react_router_1 = require("react-router");
const react_bootstrap_1 = require("react-bootstrap");
const react_router_bootstrap_1 = require("react-router-bootstrap");
const NavbarInstance = (React.createElement(react_bootstrap_1.Navbar, { inverse: true, collapseOnSelect: true },
    React.createElement(react_bootstrap_1.Navbar.Header, null,
        React.createElement(react_bootstrap_1.Navbar.Brand, null,
            React.createElement(react_router_1.Link, { to: "/" }, "React-Bootstrap")),
        React.createElement(react_bootstrap_1.Navbar.Toggle, null)),
    React.createElement(react_bootstrap_1.Navbar.Collapse, null,
        React.createElement(react_bootstrap_1.Nav, null,
            React.createElement(react_router_bootstrap_1.LinkContainer, { to: "/schools" },
                React.createElement(react_bootstrap_1.NavItem, { eventKey: 1 }, "Schools")),
            React.createElement(react_router_bootstrap_1.LinkContainer, { to: "/login" },
                React.createElement(react_bootstrap_1.NavItem, { eventKey: 2 }, "Login"))))));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarInstance;
//# sourceMappingURL=Navbar.js.map