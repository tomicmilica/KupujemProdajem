import React ,{useState,useEffect} from "react";
import axios from "axios";

const AdsPage =()=>{
    const [ads,setAds] = useState([]); 

    useEffect(() => {
        (async()=>{
        await fetchData();
        })()
    },[])

    const fetchData= async()=>{
        const response = await axios.get("http://localhost:3001/getAds");
        console.log(response);

        setAds(response.data);
    }

    const displayAll = (ads) =>{
        if(ads.length){
            return ads.map((ad) => <p>{ad.name}</p>)
        }else{}
    }
    return(
        <div>
            <h1>Welcome</h1>
            <form>
                <div>
                    {ads ? displayAll(ads) : <p>Ucitavanje...</p>}
                </div>
            </form>
        </div>

    )
}

export default AdsPage;