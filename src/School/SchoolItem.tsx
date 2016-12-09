/// <reference path="typings.d.ts" />
import * as React from 'react';

interface ISchoolItemProps {
    school: School;
}

class SchoolItem extends React.Component<ISchoolItemProps, {}> {
  render() {
    return (
      <div>{ this.props.school.name }</div>
    )
  };
}

export default SchoolItem;
