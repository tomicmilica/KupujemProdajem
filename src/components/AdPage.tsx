import React, { useEffect, useState } from "react";
import { getAd } from '../services/adsPageService'
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { authAxios } from '../configAuth'


interface AdsResponseDTO {
    name: string;
    description: string;
    price: string;
    city: string;
    category: string;
    url: string;
}

export const AdPage = ({ match }: any) => {
    const id = match.params.id;
    console.log({ match });
    const history = useHistory();
    const [ad, setAd] = useState<AdsResponseDTO>({
        name: '',
        description: '',
        price: '',
        city: '',
        category: '',
        url: ''

    });

    const fetchAds = async () => {
        const { data } = await getAd(id);
        setAd(data);
    }

    useEffect(() => {
        fetchAds();
    }, []);

    const editAd = (id: number) => {
        history.push(`/editAd/${id}`);
    }

    const removeAd = async (id: number) => {
        const { data } = await authAxios.delete(`/${id}`, {
            ...ad
        });
        setAd(data);
        history.push(`/`);
    }

    return (
        <>
            <p>About ad:</p>
            <Form>
                <Form.Item label="Name">
                    <Input id="name" value={ad.name} readOnly />
                </Form.Item>
                <Form.Item label="Description">
                    <Input id="description" value={ad.description} readOnly />
                </Form.Item>
                <Form.Item label="Price">
                    <Input id="price" value={ad.price} readOnly />
                </Form.Item>
                <Form.Item label="City">
                    <Input id="city" value={ad.city} readOnly />
                </Form.Item>
                <Form.Item label="Category">
                    <Input id="category" value={ad.category} readOnly />
                </Form.Item>
                <img src={ad.url} width="250" height="200" alt="" />
                <Form.Item>
                    <Button htmlType="button" onClick={(e) => editAd(id)}>
                        Edit
                    </Button>
                    <Button htmlType="button" onClick={(e) => removeAd(id)}>
                        Remove
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
