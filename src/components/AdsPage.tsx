import { useState, useEffect } from "react";
import { findAd } from '../services/adsPageService'
import { Link } from "react-router-dom";

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

  const fetchAds = async () => {
    const { data } = await findAd(query);
    setAds(data);
  }

  useEffect(() => {
    fetchAds();
  }, [query, category]);


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
          <label>{ad.price}</label>
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
        <Link to={`/${ad.id}`} key={ad.id}>
          <button type="button">
            Details
          </button>
        </Link>
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
        <button>Search</button>
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
