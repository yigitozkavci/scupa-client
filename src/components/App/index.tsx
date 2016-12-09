import * as React from 'react';
import NavbarInstance from './Navbar';

interface IAppProps {
  children: HTMLInputElement[];
}

class App extends React.Component<IAppProps, {}> {
  render() {
    return (
      <div>
        { NavbarInstance }
        { this.props.children }
      </div>
    )
  }
}

export default App;
