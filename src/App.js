import React, { Component } from 'react';
import 'normalize.css';

import FontHelper from './components/FontHelper';
import Catering from './templates/Catering';

class App extends Component {
  render() {
    return (
      <div >
        <FontHelper>
          <Catering />
        </FontHelper>
      </div>
    );
  }
}

export default App;
