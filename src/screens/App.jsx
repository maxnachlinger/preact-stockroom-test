import { h, render } from 'preact';
import { connect } from 'unistore/preact';
import { SearchResults } from './components/search-results';
import { SearchForm } from './components/search-form';
import { SearchStatus } from '../consts';

const App = ({ results = [], search, searchStatus }) => (
  <div>
    <SearchForm {...{ search }} />
    <p>{searchStatus === SearchStatus.Ok ? '' : searchStatus}</p>
    <SearchResults {...{ results }} />
  </div>
);

export default connect(
  'count,results,searchStatus',
  {
    search: 'search',
  },
)(App);
