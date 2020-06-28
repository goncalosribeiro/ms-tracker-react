import React from 'react';
import './App.css';
import Header from './components/header';
import Searchbox from './components/Searchbox';
import ListSelection from './components/list.selection';
import CardList from './components/CardList';
import Spinner from './components/Spinner';
import LoadMoreBtn from './components/LoadMoreBtn';
require('dotenv/config');


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1,
      totalPages: 0,
      listType: 'popular',
      mode: 'movie',
      itemsList: [],
      searchFiled: '',
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    const endPoint = `https://api.themoviedb.org/3/${this.state.mode}/${this.state.listType}?api_key=${process.env.REACT_APP_MDB_API_KEY}&page=1`;
    this.fetchItems(endPoint)
  }

  searchItems = async (searchFiled) => {
    let endPoint = '';
    await this.setState({
      page: 1,
      itemsList: [],
      loading: true,
      searchFiled: searchFiled
    })
    if (searchFiled === '') {
      endPoint = `https://api.themoviedb.org/3/${this.state.mode}/${this.state.listType}?api_key=${process.env.REACT_APP_MDB_API_KEY}&page=${this.state.page}`;
    } else {
      endPoint = `https://api.themoviedb.org/3/search/${this.state.mode}?api_key=${process.env.REACT_APP_MDB_API_KEY}&query=${searchFiled}&page=${this.state.page}&include_adult=false`;
    }
    await this.fetchItems(endPoint);
  }

  loadMoreItems = () => {
    let endPoint = '';
    this.setState({ loading: true });
    if (this.state.searchFiled === '') {
      endPoint = `https://api.themoviedb.org/3/${this.state.mode}/${this.state.listType}?api_key=${process.env.REACT_APP_MDB_API_KEY}&page=${this.state.page + 1}`;
    } else {
      endPoint = `https://api.themoviedb.org/3/search/${this.state.mode}?api_key=${process.env.REACT_APP_MDB_API_KEY}&query=${this.state.searchFiled}&page=${this.state.page + 1}`;
    }
    this.fetchItems(endPoint);
  }

  fetchItems = (endPoint) => {
    fetch(endPoint)
      .then(result => result.json())
      .then(result => {
        const newItemsList = [...this.state.itemsList];
        this.setState({
          page: result.page,
          itemsList: [...newItemsList, ...result.results],
          loading: false,
          totalPages: result.total_pages
        });

      })
  }

  typeSelection = async event => {
    let listype = event.target.innerText.toLowerCase();
    listype = listype.replace(/ /g, "_");
    await this.setState({
      page: 1,
      totalPages: 0,
      listType: listype,
      itemsList: [],
      loading: true,
      searchFiled: ''
    });
    let endPoint = `https://api.themoviedb.org/3/${this.state.mode}/${this.state.listType}?api_key=${process.env.REACT_APP_MDB_API_KEY}&page=${this.state.page}`;
    await this.fetchItems(endPoint);
  };

  modeSelection = async event => {
    let modeType = event.target.innerText;
    if (modeType === 'Movies') {
      modeType = 'movie'
    }
    else if (modeType === 'Series') {
      modeType = 'tv'
    }
    await this.setState({
      page: 1,
      totalPages: 0,
      itemsList: [],
      listType: 'popular',
      mode: modeType,
      loading: true,
      searchFiled: ''
    });
    let endPoint = `https://api.themoviedb.org/3/${this.state.mode}/${this.state.listType}?api_key=${process.env.REACT_APP_MDB_API_KEY}&page=${this.state.page}`;
    await this.fetchItems(endPoint);
  };

  onSearchChange = (event) => {
    this.setState({ searchfiled: event.target.value });
  }

  render() {
    return (
      <div className='App'>
        <Header mode={this.modeSelection} />
        <Searchbox callback={this.searchItems} search={this.state.searchFiled} />
        <ListSelection type={this.typeSelection} mode={this.state.mode} />
        <CardList
          mode={this.state.mode}
          itemsList={this.state.itemsList}
          header={this.state.searchFiled ? `Search Result for: "${this.state.searchFiled}"` : null}
          loading={this.state.loading}
        />
        {this.state.loading ? <Spinner /> : null}
        {(this.state.page < this.state.totalPages && !this.state.loading) ?
          <LoadMoreBtn text='Load More' onClick={this.loadMoreItems} /> : null}
      </div>
    );
  }
}

export default App;
