"use strict";
const React = require("react");
const actions_1 = require("./actions");
const react_redux_1 = require("react-redux");
const SchoolItem_1 = require("./SchoolItem");
const fetch = require("isomorphic-fetch");
class SchoolContainer extends React.Component {
    componentDidMount() {
        this.props.loadSchools();
    }
    render() {
        var rows = [];
        if (this.props.schools) {
            for (var i = 0; i < this.props.schools.length; i++) {
                rows.push(React.createElement(SchoolItem_1.default, { key: i, school: this.props.schools[i] }));
            }
        }
        return (React.createElement("div", null, rows));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadSchools: () => {
            dispatch(actions_1.startSchoolsIndex());
            fetch('http://localhost:4000/schools')
                .then(response => {
                if (response.status >= 400) {
                    dispatch(actions_1.failSchoolsIndex());
                }
                else {
                    response.json()
                        .then(resp => {
                        dispatch(actions_1.successSchoolsIndex(resp));
                    });
                }
            });
        }
    };
};
const mapStateToProps = (state) => {
    return {
        schools: state.schools
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SchoolContainer);
//# sourceMappingURL=container.js.map