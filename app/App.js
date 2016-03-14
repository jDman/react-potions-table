import React from 'react';

import Potions from './collections/potions';

let potionCollection = new Potions();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      potions: []
    }
  }

  componentDidMount() {
    potionCollection.fetch({
      success: potions => {
        let potionsList = [];

        potions.models.map(potion => {
          potionsList.push(potion.attributes);
        });

        this.setState({potions: potionsList});
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Potions</h1>

        {
          this.state.potions.map(potion => {
            return <p key={potion._id}>{potion.name}</p>
          })
        }
      </div>
    );
  }
}

export default App;
