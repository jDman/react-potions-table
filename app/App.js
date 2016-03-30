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
          , resultsPerPage = this.state.pages.perPage;

        potions.models.map(potion => {
          potionsList.push(potion.attributes);
        });

        this.handleState(1, potionsList, potionsList, resultsPerPage);
      }
    });
  }

  handleState(index, list, pageArray, results) {
    let perPage = parseInt(results, 10);

    pageArray = this.splitResults(pageArray, perPage);

    console.log(pageArray);

    this.setState({
      potions: list,
      potionList: pageArray[index-1],
      pages: {
        perPage: results,
        index: index,
        page: pageArray
      }
    });
  }

  searchResult(input) {
    let list = []
      , potions = this.state.potions
      , index = 1
      , results = this.state.pages.perPage;

    _.filter(potions, (potion) => {
      if (potion.name.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
        list.push(potion);
      } 
    });

    this.handleState(index, potions, list, results);
  }

  splitResults(list, results) {
    let newArray = []
      , items = results
      , listLength = list.length;

    for (var i = 0; i < listLength; i+=items) {
      newArray.push(list.slice(i, i+items));
    }
    console.log(newArray);

    return newArray;
  }

  updateResultsPerPage(results) {
    let index = this.state.pages.index
      , potions = this.state.potions;

    this.handleState(index, potions, potions, results);
  }

  nextPage() {
    let index = this.state.pages.index + 1
      , pagesArray = this.state.potionList
      , perPage = this.state.pages.perPage
      , potions = this.state.potions;

    if (index > (potions.length / perPage)) {
      index = (potions.length / perPage);
    }

    this.handleState(index, potions, potions, perPage);
  }

  prevPage() {
    let index = this.state.pages.index - 1
      , pagesArray = this.state.potionList
      , perPage = this.state.pages.perPage
      , potions = this.state.potions;

    if (index <= 0) {
      index = 1;
    }

    this.handleState(index, potions, potions, perPage);
  }

  render() {
    let prevBtn = <span></span>
      , nextBtn = <span></span>;

    if (this.state.potions.length > this.state.pages.perPage) {
      prevBtn = <PrevBtn prevPage={this.prevPage.bind(this)}/>;
      nextBtn = <NextBtn nextPage={this.nextPage.bind(this)}/>;
    }

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

        <div>{prevBtn} {nextBtn}</div>
      </div>
    );
  }
}

export default App;
