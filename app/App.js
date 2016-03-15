import React from 'react';
import * as _ from 'underscore';

import Table from './components/table/table';
import TableRow from './components/table/table-row';
import PrevBtn from './components/buttons/previous';
import NextBtn from './components/buttons/next';
import Search from './components/search/search';

import Potions from './collections/potions';

let potionCollection = new Potions();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      potions: [],
      potionList: []
    }
  }

  componentDidMount() {
    potionCollection.fetch({
      success: potions => {
        let potionsList = [];

        potions.models.map(potion => {
          potionsList.push(potion.attributes);
        });

        this.setState({
          potions: potionsList,
          potionList: potionsList
        });
      }
    });
  }

  updateResults(input) {
    let filtered = [];

    _.filter(this.state.potions, (potion) => {
      if (potion.name.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
        filtered.push(potion);
      }
    });

    this.setState({potionList: filtered})
  }

  render() {
    return (
      <div className='container'>
        <h1>Potions</h1>

        <Search updateResults={this.updateResults.bind(this)}/>

        <Table list={this.state.potionList}>
          {
            this.state.potionList.map(potion => {
              return <p key={potion._id}>{potion.name}</p>
            })
          }
        </Table>

        <div>
          <PrevBtn />
          <NextBtn />
        </div>
      </div>
    );
  }
}

export default App;
