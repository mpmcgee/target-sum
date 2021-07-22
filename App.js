import React from 'react';
import Game from './src/components/Game';

class App extends React.Component {
  render() {
    return(
        <Game randomNumberCount={6}/>

    );
  }
}

export default App;