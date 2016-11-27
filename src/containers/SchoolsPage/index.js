import React from 'react';
import { startSchoolsIndex, successSchoolsIndex, failSchoolsIndex } from '../../actions/schools';
import { connect } from 'react-redux';
import School from './School';

class SchoolsPage extends React.Component {
// const SchoolsPage = ({ schools, loadSchools }) => {
  componentDidMount() {
    this.props.loadSchools();
  }

  render() {
    // loadSchools();
    var rows = [];
    if(this.props.schools) {
      for(var i = 0; i < this.props.schools.length; i++) {
        rows.push(<School key={ i } school={ this.props.schools[i] } />);
      }
    }
    return (
      <div>
        { rows }       
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
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

const mapStateToProps = (state) => {
  return {
    schools: state.schools
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolsPage);
