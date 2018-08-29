import { h, render } from 'preact';

export const SearchResults = ({ results = [] }) => (
  <div>
    <p>Results: {results.length}</p>
    {results.map(({ itemImage300 }) => (
      <img src={itemImage300} />
    ))}
  </div>
);
