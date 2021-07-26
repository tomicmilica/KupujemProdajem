import React, { useState, useEffect } from "react";
import  getAds from '../services/AdsService'

interface AdsResponseDTO {
  name: string;
  description: string;
  price: string;
  city: string;
  category: string;
  url: string;
}

const AdsPage = () => {
  const [ads, setAds] = useState<AdsResponseDTO[]>();
  const [search, setSearch] = useState<String>('');

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    const response = await getAds();
    setAds(response.data);
  };

  const handleSearch =(e:any)=>{
      setSearch(e.target.value);
  }

  const displayAll = () => {
    if (ads) {
      if (ads.length) {
        return ads.filter((ad)=>{
            if(search === ""){
                return ad;
            }
            else if(ad.name.toLowerCase().includes(search.toLowerCase())){
              return ad
            }
        }).map((ad) => (
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
          <div>
            <tr>
              <th scope="row">
              <img src={ad.url} width="250" height="200" alt=""/>
              </th>
            </tr>
          </div>
        </div>
        ))
  }
  }
}
    
  return (
    <div>
      <h1>Welcome</h1>
      <div>
              <input type="text" onChange={handleSearch} placeholder="Search..."/>
             
      </div>
      <form>
        <div>{ads ? displayAll() : <p>Ucitavanje...</p>}</div>
      </form>
    </div>
  );
};

export default AdsPage;
