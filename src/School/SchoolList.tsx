import * as React from 'react';
import SchoolItem from './SchoolItem';

interface ISchoolListProps extends React.Props<SchoolList> {
    schools: any[];
    loadSchools: () => void;
}

class SchoolList extends React.Component<ISchoolListProps, {}> {
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

export default SchoolList;
