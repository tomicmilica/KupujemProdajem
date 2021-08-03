import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
require('dotenv').config()
const BASE_URL = process.env.REACT_APP_BASE_URL;


interface theAd {
    name: string;
    description: string;
    price: string;
    city: string;
    category: string;
    url: string;
}

const EditAdPage = ({ match }: any) => {
    const id = match.params.id;
    const history = useHistory();
    const [category_new, setCategory] = useState("");
    const [description_new, setDescription] = useState("");

    console.log({ match });
    const [ad, setAd] = useState<theAd>({
        name: '',
        description: '',
        price: '',
        city: '',
        category: category_new,
        url: ''
    });

    const fetchAd = async () => {
        const { data } = await axios.get(BASE_URL + `/getAd/${id}`);
        setAd(data);
        setCategory(data.category)
        setDescription(data.description)
    }
    const PatchAd = async (ad: any) => {
        const { data } = await axios.patch(BASE_URL + `/${id}`, {
            ...ad,
            description: description_new,
            category: category_new
        });
        setAd(data);
        history.push(`/${id}`);
    }

    useEffect(() => {
        fetchAd();
    }, []);

    //const handleChangeAd = (e: any) => setAds(e.target.value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAd(prevAd => ({
            ...prevAd,
            [e.target.name]: e.target.value
        }));
    }

    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }

    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    return (
        <>
            <p>Edit ad:</p>
            <Form >
                <Form.Item label="Name">
                    <Input id="name" value={ad.name} name="name" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item label="Description">
                    <Input id="description" name="description" value={description_new} onChange={handleChangeDescription} />
                </Form.Item>
                <Form.Item label="Price">
                    <Input id="price" name="price" value={ad.price} onChange={handleInputChange} />
                </Form.Item>
                <Form.Item label="City">
                    <Input id="city" name="city" value={ad.city} onChange={handleInputChange} />
                </Form.Item>
                <div>
                    <label> Category: </label>
                    <select onChange={handleChangeCategory} id="category" name="category" value={category_new} >
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
                <img src={ad.url} width="250" height="200" alt="" />
                <Form.Item>
                    <Button onClick={() => { PatchAd(ad) }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default EditAdPage;