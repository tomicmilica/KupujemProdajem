import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd';
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
    console.log({ match });
    const [ad, setAd] = useState<theAd>({
        name: '',
        description: '',
        price: '',
        city: '',
        category: '',
        url: ''
    });

    const fetchAd = async () => {
        const { data } = await axios.get(BASE_URL + `/getAd/${id}`);
        setAd(data);
    }
    const PatchAd = async (ad: any) => {
        const { data } = await axios.patch(BASE_URL + `/${id}`, {
            ...ad
        });
        setAd(data);
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

    return (
        <>
            <p>Edit ad:</p>
            <Form >
                <Form.Item label="Name">
                    <Input id="name" value={ad.name} name="name" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item label="Description">
                    <Input id="description" name="description" value={ad.description} />
                </Form.Item>
                <Form.Item label="Price">
                    <Input id="price" name="price" value={ad.price} />
                </Form.Item>
                <Form.Item label="City">
                    <Input id="city" name="city" value={ad.city} />
                </Form.Item>
                <Form.Item label="Category">
                    <Input type="text" id="category" value={ad.category} />
                </Form.Item>
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