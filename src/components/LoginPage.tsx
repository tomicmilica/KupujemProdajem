import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const LoginPage = () => {
  const [usernameLog, setEmail] = useState("");
  const [passwordLog, setPassword] = useState("");
  const history = useHistory();
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post(BASE_URL + "/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      localStorage.setItem('token', response.data.token)
    });
    history.push(`/`);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="box-layout">
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
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
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
