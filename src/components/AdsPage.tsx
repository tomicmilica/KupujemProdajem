import { useState, useEffect } from "react";
import { findAd } from '../services/adsPageService'
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

interface AdsResponseDTO {
  id: string,
  name: string;
  description: string;
  price: string;
  city: string;
  category: string;
  url: string;
}

const AdsPage = () => {
  const [ads, setAds] = useState<AdsResponseDTO[]>();
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [user, setUser] = useState<any>();

  const config = {
    headers: {
      "x-access-token": localStorage.getItem('token')
    }
  }

  const fetchUser = async () => {
    axios.get(BASE_URL + `/user`, config).then(
      res => {
        setUser({
          user: res.data
        })
      }
    )
  }

  const fetchAds = async () => {
    const { data } = await findAd(query, category);
    setAds(data);
  }

  useEffect(() => {
    fetchAds();
  }, [query, category]);

  useEffect(() => {
    fetchUser();
  }, []);


  const handleChangeSearchQuery = (e: any) => setQuery(e.target.value);
  const handleChangeSearchCategory = (e: any) => setCategory(e.target.value)

  const displayAll = () => {
    if (!ads) {
      return null;
    }

    return ads.map((ad) => (
      <div>
        <div>
          <label>Name:</label>
          <label>{ad.name}</label>

        </div>
        <div>
          <label>Description:</label>
          <label>{ad.description}</label>
        </div>
        <div>
          <label>Price:</label>
          <label>{ad.price}$</label>
        </div>
        <div>
          <label>City:</label>
          <label>{ad.city}</label>
        </div>
        <div>
          <label>Category:</label>
          <label>{ad.category}</label>
        </div>
        <tr>
          <th scope="row">
            <img src={ad.url} width="250" height="200" alt="" />
          </th>
        </tr>
      </div>
    ))
  }
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <label> Search by category:</label>
        <select id="category" onChange={handleChangeSearchCategory}>
          <option value="" >Choose a category:</option>
          <option value="clothing">clothing</option>
          <option value="toys">toys</option>
          <option value="sports">sports</option>
          <option value="tools">tools</option>
          <option value="pets">pets</option>
          <option value="games">games</option>
          <option value="baby">baby</option>
          <option value="technology">technology</option>
        </select>
      </div>
      <div>
        <input type="text" onChange={handleChangeSearchQuery} placeholder="Search..." />
      </div>
      <form>
        <div>{ads ? displayAll() : <p>Ucitavanje...</p>}</div>
      </form>
    </div>
  );

};

export default AdsPage;
