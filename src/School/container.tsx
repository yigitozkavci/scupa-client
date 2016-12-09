/// <reference path="../typings.d.ts" />

import * as React from 'react';
import { startSchoolsIndex, successSchoolsIndex, failSchoolsIndex } from './actions';
import { connect } from 'react-redux';
import * as fetch from 'isomorphic-fetch';
import SchoolList from './SchoolList';


const mapDispatchToProps = (dispatch: any) => {
  return {
    loadSchools: () => {
      dispatch(startSchoolsIndex());
      fetch('http://localhost:4000/schools')
        .then(response => {
          if(response.status >= 400) {
            dispatch(failSchoolsIndex());
          } else {
            response.json()
              .then(resp => {
                  dispatch(successSchoolsIndex(resp));
              });
          }
        });
    }
  }
}

const mapStateToProps = (state: State) => {
  return {
    schools: state.school.schools
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolList);
