import React, { useState, useEffect } from "react";
import  getAds from '../services/AdsService'

interface AdsResponseDTO {
  name: string;
  description: string;
  price: string;
  city: string;
  category: string;
  url: string
}

const AdsPage = () => {
  const [ads, setAds] = useState<AdsResponseDTO[]>();

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    const response = await getAds();
    setAds(response.data);
  };

  const displayAll = () => {
    if (ads) {
      if (ads.length) {
        return ads.map((ad) => (
          <div>
            <div>
              <label>Name:</label>
              <p>{ad.name}</p>
            </div>

            <div>
              <p>{ad.description}</p>
            </div>

            <div>
              <p>{ad.price}</p>
            </div>

            <div>
              <p>{ad.city}</p>
            </div>

            <div>
              <p>{ad.category}</p>
            </div>
            <div>
              <tr>
                <th scope="row">
                <img src={ad.url} width="250" height="200" alt=""/>
                </th>
              </tr>
            </div>
          </div>
        ));
      } else {
      }
    }
  };
  return (
    <div>
      <h1>Welcome</h1>
      <form>
        <div>{ads ? displayAll() : <p>Ucitavanje...</p>}</div>
      </form>
    </div>
  );
};

export default AdsPage;
