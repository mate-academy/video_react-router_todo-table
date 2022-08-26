import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  const query = searchParams.get('query') || '';

  function updateSearch(params: { [key: string]: string | null }) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    setSearchParams(searchParams);
  }

  const onPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateSearch({ page: event.target.value || null });
  };

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearch({ query: event.target.value || null });
  };

  return (
    <div className="block">
      <div className="field is-grouped">
        <div className="control">
          <div className="select">
            <select value={page} onChange={onPageChange}>
              <option value="">No page</option>

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
            value={query}
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
