import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const LoginPage = () => {
  const [usernameLog, setEmail] = useState("");
  const [passwordLog, setPassword] = useState("");

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post(BASE_URL + "/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
    });
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" value="Login">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
