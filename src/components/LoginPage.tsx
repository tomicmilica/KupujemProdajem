import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from '../context/user-context';
import { useContext } from "react";
import { getUser } from '../services/user'

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const LoginPage = () => {
  const [usernameLog, setEmail] = useState("");
  const [passwordLog, setPassword] = useState("");
  //  const [user, setUser] = useState<any>();
  const { email, setEmail: setEmailContext } = useContext(UserContext);
  const history = useHistory();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(BASE_URL + "/login", {
      username: usernameLog,
      password: passwordLog,
    })
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('refreshToken', res.data.refreshToken)
  }


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const fetchUser = async () => {
    const user = await getUser();
    setEmailContext(user.data.toString());
    history.push(`/`);
  }

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div>
      <div></div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onSubmitCapture={login}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            type="username"
            name="username"
            id="username"
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" value="login">
            Login
          </Button>
        </Form.Item>
      </Form >
    </div>
  );
};
