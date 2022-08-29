import classNames from 'classnames';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  const query = searchParams.get('query') || '';
  const letters = searchParams.getAll('letters') || [];

  function getSearchWith(params: { [key: string]: string[] | string | null }) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        searchParams.delete(key);
      } else if (Array.isArray(value)) {
        searchParams.delete(key);

        value.forEach(part => {
          searchParams.append(key, part);
        });
      } else {
        searchParams.set(key, value);
      }
    });

    return searchParams.toString();
  }

  //#region page and query
  const onPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(
      getSearchWith({ page: event.target.value || null })
    );
  };

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      getSearchWith({ query: event.target.value || null }),
    );
  };
  //#endregion

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
          <Link
            to={{
              search: getSearchWith({
                letters: letters.includes(letter)
                  ? letters.filter(l => l !== letter)
                  : [...letters, letter],
              }),
            }}
            key={letter}
            className={classNames('button', { 'is-info': letters.includes(letter) })}
          >
            {letter}
          </Link>
        ))}

        <Link
          to={{ search: getSearchWith({ letters: null }) }}
          className="button"
        >
          Clear All
        </Link>
      </div>
    </div>
  )
};
