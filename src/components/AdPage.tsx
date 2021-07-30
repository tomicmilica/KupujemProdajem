import React, { useEffect, useState } from "react";
import { getAd } from '../services/adsPageService'
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

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
    const [ads, setAds] = useState<AdsResponseDTO>({
        name: '',
        description: '',
        price: '',
        city: '',
        category: '',
        url: ''

    });

    const fetchAds = async () => {
        const { data } = await getAd(id);
        setAds(data);
    }

    useEffect(() => {
        fetchAds();
    }, []);

    const editAd = (id: number) => {
        history.push(`/editAd/${id}`);
    }

    return (
        <>
            <p>About ad:</p>
            <Form>
                <Form.Item label="Name">
                    <Input id="name" value={ads.name} readOnly />
                </Form.Item>
                <Form.Item label="Description">
                    <Input id="name" value={ads.description} readOnly />
                </Form.Item>
                <Form.Item label="Price">
                    <Input id="name" value={ads.price} readOnly />
                </Form.Item>
                <Form.Item label="City">
                    <Input id="name" value={ads.city} readOnly />
                </Form.Item>
                <Form.Item label="Category">
                    <Input id="name" value={ads.category} readOnly />
                </Form.Item>
                <img src={ads.url} width="250" height="200" alt="" />
                <Form.Item>
                    <Button htmlType="button" onClick={(e) => editAd(id)}>
                        Edit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
