import React, { useState, useEffect } from 'react';
import './Search.css';
import { getData } from '../../../api/api';

export const Search = () => {
  const [ data, setData ] = useState([])
  const [ input, setInput ] = useState('');

  const debounce = (func, wait) => {
    let timeout;
  
    return function executedFunction(event) {
      const later = () => {
        clearTimeout(timeout);
        func(event);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const delayFunction = debounce(handleInput, 1000);

  function handleInput(e) {
    setInput(e.target.value.trimLeft().toLowerCase());
    setData(['Searching...'])
  }

  useEffect(() => {
    if (input.length) {
      filter(input);
    } else {
      setData([]);
    }   
  }, [input]);

  function filter(currentInput) {
    getData().then(response => {
      let filtered = [];

      for(const key in response.data) {
        filtered = filtered.concat(response.data[key].data.filter(item => {
          return item.title.toLowerCase().includes(currentInput) || item.Artist.toLowerCase().includes(currentInput)
        }));
      }

      if (filtered.length) {
        setData(filtered);
      } else {
        setData(['No matches :(']);
      }
      
    });
  }

  function reset(e) {
    e.preventDefault();
    setData([]);
    e.target.parentElement.parentElement.firstElementChild.value = '';
  }

  console.log(data);
  


  return(
    <>
      <div className="src d-none d-md-block">
        <form>
          <input
            type="text"
            name=""
            placeholder="Search artist, songs, videos..."
            onChange={(e) => delayFunction(e)}
          />

          <button type="submit" className="btn-submit">
            <i className="fa fa-search"></i>
          </button>

          <button
            className="search-cancil"
            onClick={reset}
          >
            <img src='../img/icon-cross.png' alt=""/>
          </button>
        </form>
      </div>

      {data.length && (
        <div className="search-reasult">
          {typeof data[0] !== 'string' && (
          <ul>
            {data.map(elem => (
              <li key={`${Math.random()}`}>
                <a href="#!">
                  <img src={
                    elem.image.includes('<$size$>') ?
                      elem.image.replace(/<\$size\$>/, '300') :
                      elem.image
                  } alt=""/>

                  <span dangerouslySetInnerHTML={{
                    __html: elem.title.toLowerCase().includes(input) ?
                      elem.title.replace(new RegExp(input, 'i'),
                      `<span style="opacity: 0.5">${elem.title.match(new RegExp(input, 'i'))}</span>`) :
                      elem.Artist.replace(new RegExp(input, 'i'),
                      `<span style="opacity: 0.5">${elem.Artist.match(new RegExp(input, 'i'))}</span>`)
                  }}/>
                </a>
              </li>
            ))}
          </ul>
          )}

          {data[0] === 'Searching...' && (
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          )}

          {data[0] === 'No matches :(' && (
            <span>{data[0]}</span>
          )}
        </div>
      )}
    </>
  )
}
