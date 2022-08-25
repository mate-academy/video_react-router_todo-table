import React, { useState } from 'react';

export const Filters = () => {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  const onPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(+event.target.value);
  };

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="block">
      <div className="field is-grouped">
        <div className="control">
          <div className="select">
            <select value={page} onChange={onPageChange}>
              <option value="0">No page</option>

              {[1, 2, 3, 4, 5].map(page => (
                <option key={page}>
                  {page}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="control">
          <input
            type="search"
            defaultValue={query}
            onChange={onQueryChange}
            className="input"
            placeholder="Enter a query"
          />
        </div>
      </div>

      <div className="buttons">
        {['a', 'e', 'i', 'o', 'u'].map(letter => (
          <button key={letter} className="button">
            {letter}
          </button>
        ))}

        <button className="button">Clear All</button>
      </div>
    </div>
  )
};
