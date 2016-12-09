"use strict";
exports.startSchoolsIndex = () => {
    return {
        type: 'START_SCHOOLS_INDEX'
    };
};
exports.successSchoolsIndex = (schools) => {
    return {
        type: 'SUCCESS_SCHOOLS_INDEX',
        data: schools
    };
};
exports.failSchoolsIndex = () => {
    return {
        type: 'FAIL_SCHOOLS_INDEX'
    };
};
//# sourceMappingURL=actions.js.map