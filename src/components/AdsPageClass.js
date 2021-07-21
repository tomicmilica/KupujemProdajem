import React ,{Component} from "react";
import Axios from 'axios'
import {Link} from 'react-router-dom'
import axios from "axios";

export default class  AdsPage extends Component{
    constructor(props){
        super(props)
        this.state={
            ads:undefined
        }
    }

    componentDidMount=()=>{
        (async () => {
            await this.fetchData();
        })();
    }

    fetchData= async ()=>{
        const response = await axios.get("http://localhost:3001/getAds");
        console.log(response);

        this.setState({ads: response.data});
    }

    displayAll = (ads) =>{
        if(ads.length){
            return ads.map((ad) => <p>{ad.name}</p>)
        }else{}
    }

    render(){
        const { ads } = this.state;
    return(
        <div>
            <h1>Welcome</h1>
            <form>
                <div>
                    {ads ? this.displayAll(ads) : <p>Ucitavanje...</p>}
                </div>
            </form>
        </div>
    )
    }

}
