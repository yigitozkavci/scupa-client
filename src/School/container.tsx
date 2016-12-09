/// <reference path="../typings.d.ts" />

import * as React from 'react';
import { startSchoolsIndex, successSchoolsIndex, failSchoolsIndex } from './actions';
import { connect } from 'react-redux';
import SchoolItem from './SchoolItem';
import * as fetch from 'isomorphic-fetch';


interface ISchoolContainerProps extends React.Props<SchoolContainer> {
    schools: any[];
    loadSchools: () => void;
}

interface ISchoolContainerState {
}

class SchoolContainer extends React.Component<ISchoolContainerProps, {}> {
  componentDidMount() {
    this.props.loadSchools();
  }

  render() {
    let rows: JSX.Element[] = [];
    for(var i = 0; i < this.props.schools.length; i++) {
      rows.push(<SchoolItem key={ i } school={ this.props.schools[i] } />);
    }
    return (
      <div>
        { rows }
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SchoolContainer);
