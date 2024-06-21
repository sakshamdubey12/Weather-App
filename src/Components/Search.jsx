import React, { useContext } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import '../App.css';
import Weather from './weather';
import Pill from './pills';
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import useFetch from '../hooks/useFetch';
import { FavouritesContext } from '../context/FavouritesContext';


export const Search = () => {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [isFavorite, setIsFavorite] = useState(false);
  const { data, getWeatherDetails } = useFetch(apiKey);
  const { favoriteCities, addCityToFavorites, removeCityFromFavorites } = useContext(FavouritesContext);  

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {

   
    if(isFavorite==='False'){
      setIsFavorite(!isFavorite);
     }
     getWeatherDetails(inputCity);
     setTimeout(()=> setInputCity(""), [10000]);
  }

  const toggleHeart = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite && inputCity) {
      addCityToFavorites(inputCity);
      setInputCity("");
    }
  };

  const handleRemoveCity = (city) => {
    removeCityFromFavorites(city);
  };

  useEffect(() => {
    console.log('Data length:', Object.keys(data).length);
  }, [data]);
  return (
    <div>
      <div className="background"></div>
    <div className={`wetherBg ${Object.keys(data).length === 0 ? 'new' : ''}`}>
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} placeholder='Enter The City Name'/>
            <div className='buttons'>
            <button className="btn btn-secondary sear" type="button"
            onClick={handleSearch}
          >Search</button>
           {isFavorite ? 
              <BsHeartFill 
                style={{ marginLeft: '30px', fontSize: '2rem', color: 'red' }} 
               
              /> 
              : 
              <BsHeart 
                style={{ marginLeft: '30px', fontSize: '2rem', color: 'red' }} 
                onClick={toggleHeart} 
              />
            }
            </div>
        </div>
      </div>
        <div  className='fav' style={{visibility:favoriteCities.length===0?'hidden':'visible'}}>
        {favoriteCities.map((city, index) => (
          <Pill key={index} city={city} onRemove={handleRemoveCity}/>
        ))}
        </div>
      <Weather data={data}/>
  </div>
  )
}

export default Search;