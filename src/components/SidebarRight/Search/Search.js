import React, { useState } from 'react';
import './Search.css';
import { getData } from '../../../api/api';

export const Search = () => {
  const [ data, setData ] = useState([])
  const [ input, setInput ] = useState('');

  function filter(e) {
    setInput(e.target.value);

    if(input.length >= 3) {
      getData().then(response => {
        console.log(response.data);
      });
    }
  }
  


  return(
    <>
      <div className="src d-none d-md-block">
        <form>
          <input
            type="text"
            name=""
            placeholder="Search artist, songs, videos..."
            onChange={filter}
          />

          <button type="submit" className="btn-submit">
            <i className="fa fa-search"></i>
          </button>

          <button className="search-cancil">
            <img src='../img/icon-cross.png' alt=""/>
          </button>
        </form>
      </div>

      {data.length && (
        <div className="search-reasult">
          <ul>
            {data.forEach(elem => {
              <li>
                <a href="#!">
                  <img src={(/<$size$>/g).test(elem.image) ? elem.image.replace((/<$size$>/), '300') : elem.image } alt=""/>
                  <span>Habib wa</span>hid - Prithibir Joto Shukh
                </a>
              </li>
            })}
          </ul>
        </div>
      )}

      
    </>
  )
}
