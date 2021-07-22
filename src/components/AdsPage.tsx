import React, { useState, useEffect } from "react";
import axios from "axios";

interface AdsResponseDTO {
  name: string;
  description: string;
  price: string;
  city: string;
  category: string;
}

const AdsPage = () => {
  const [ads, setAds] = useState<AdsResponseDTO[]>();

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/getAds");
    console.log(response);

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
