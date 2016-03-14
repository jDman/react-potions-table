import React from 'react';

import Table from './components/table/table';
import TableRow from './components/table/table-row';

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

        <Table list={this.state.potions}>
          {
            this.state.potions.map(potion => {
              return <p key={potion._id}>{potion.name}</p>
            })
          }
        </Table>


      </div>
    );
  }
}

export default App;
