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


        this.handleState(1, potionsList, pagesArray, this.state.pages.perPage);
      }
    });
  }

  handleState(index, list, pageArray, page) {
    this.setState({
      potions: list,
      potionList: pageArray[index-1],
      pages: {
        perPage: page,
        index: index,
        page: pageArray
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

    this.handleState(index, potions, pagesArray, this.state.pages.perPage);
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

  // TODO: refactor function
  updateResultsPerPage(results) {
    let index = this.state.pages.index
      , pagesArray
      , perPage = parseInt(results, 10)
      , potions = this.state.potions;

    pagesArray = this.splitResults(potions, perPage);


    this.handleState(index, potions, pagesArray, perPage);
  }

  nextPage() {

    console.log('next page');
  }

  prevPage() {
    console.log('prev page');
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
