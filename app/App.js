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
        perPage: 10,
        index: null,
        page: []
      }
    }
  }

  componentDidMount() {
    potionCollection.fetch({
      success: potions => {
        let potionsList = []
          , resultsPerPage = this.state.pages.perPage
          , pagesArray = [];

        potions.models.map(potion => {
          potionsList.push(potion.attributes);
        });

        pagesArray = this.splitResults(potionsList, resultsPerPage)

        this.setState({
          potions: potionsList,
          potionList: pagesArray[0],
          pages: {
            perPage: this.state.pages.perPage,
            index: 1,
            page: pagesArray
          }
        });
      }
    });
  }

  searchResult(input) {
    let list = []
      , pagesArray = []
      , potions = this.state.potions
      , index = this.state.pages.index
      , results = parseInt(this.state.pages.perPage, 10);

    _.filter(this.state.potions, (potion) => {
      if (potion.name.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
        list.push(potion);
      }
    });

    pagesArray = this.splitResults(list, results);

    this.setState({
      potionList: pagesArray[index-1],
      pages: {
        perPage: this.state.pages.perPage,
        index: index,
        page: pagesArray
      }
    });
  }

  splitResults(list, results) {
    let newArray = []
      , items = parseInt(results, 10)
      , listLength = list.length;

    if (listLength >= items) {
      for (var i = 0; i < listLength; i+=items) {
        newArray.push(list.slice(i, i+items));
      }

      return newArray;
    } else {
      return [list];
    }
  }

  updateResultsPerPage(results) {
    let index = this.state.pages.index
      , pagesArray
      , perPage = parseInt(results, 10)
      , potions = this.state.potions;

    pagesArray = this.splitResults(potions, perPage);

    this.setState({
      potions: potions,
      potionList: pagesArray[index-1],
      pages: {
        perPage: perPage,
        index: index,
        page: pagesArray
      }
    });


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
