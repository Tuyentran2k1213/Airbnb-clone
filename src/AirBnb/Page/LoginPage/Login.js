import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { userAction } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import { useEffect, useState } from 'react';

export default function Login() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userInfor } = useSelector(state => state.userReducer, (prev, next) => isEqual(prev, next));

  const onFinish = (values) => {
    dispatch(userAction.LoginAction({
      data: values,
      onAction: setLoading,
    }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if(userInfor){
      navigate('/');
    }
  }, [userInfor])

  return (
    <Spin spinning={loading} tip="Login...">
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

        <span>
          chưa có tài khoản ? <Link to='/mobile/signup'>Đăng kí tài khoản tại đây</Link>
        </span>

    </Form>
    </Spin>
  )
}
