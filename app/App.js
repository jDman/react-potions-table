import React from 'react';
import * as _ from 'underscore';

import Table from './components/table/table';
import TableRow from './components/table/table-row';
import PrevBtn from './components/buttons/previous';
import NextBtn from './components/buttons/next';
import Search from './components/search/search';
import Pagination from './components/pagination/pagination';

import Potions from './collections/potions';

let potionCollection = new Potions();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      potions: [],
      potionList: [],
      pages: {
        perPage: [10, 25, 50],
        index: null,
        page: []
      }
    }
  }

  componentDidMount() {
    potionCollection.fetch({
      success: potions => {
        let potionsList = []
          , resultsPerPage = this.state.pages.perPage[0]
          , pageArray = [];

        potions.models.map(potion => {
          potionsList.push(potion.attributes);
        });

        pageArray = this.splitResults(potionsList, resultsPerPage)

        this.setState({
          potions: potionsList,
          potionList: pageArray[0],
          pages: {
            perPage: this.state.pages.perPage,
            index: 1,
            page: pageArray
          }
        });
      }
    });
  }

  searchResult(input) {
    let filtered = [];

    _.filter(this.state.potions, (potion) => {
      if (potion.name.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
        filtered.push(potion);
      }
    });

    this.setState({potionList: filtered})
  }

  splitResults(list, results) {
    let newArray = [];
    for (var i = 0; i < list.length; i+=results) {
      newArray.push(list.slice(i, i+results));
    }

    return newArray;
  }

  updateResultsPerPage(results) {
    console.log(results);
  }

  render() {
    return (
      <div className='container'>
        <h1>Potions</h1>

        <Search searchResult={this.searchResult.bind(this)} />

        <Table list={this.state.potionList}
               resultsPerPage={this.state.pages.perPage}
        />

      <Pagination updateResultsPerPage={this.updateResultsPerPage.bind(this)}
                  page={this.state.pages.index}
      />
        <div>
          <PrevBtn />
          <NextBtn />
        </div>
      </div>
    );
  }
}

export default App;
