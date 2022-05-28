import { Form, Input, DatePicker, Radio, Button, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { userAction } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { isEqual } from 'lodash';


export default function Signup() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userInfor } = useSelector(state => state.userReducer, (prev, next) => isEqual(prev, next));

  const onFinish = (values) => {
    setLoading(true);
    const waiting = async () => {
      return await dispatch(userAction.SignupAction(values));
    };
    waiting()
      .then(res => {
        setLoading(!res);
        navigate('/mobile/login');
      });
  };

  const onFinishFailed = (errorInfo) => {
  };

  useEffect(() => {
    if(userInfor){
      navigate('/');
    }
  }, [userInfor]);

  return (
    <>
    <div className='pb-44'>
    <Spin spinning={loading} tip="Waiting for signup...">
    <Form
      name="Signup"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Please type correct your email',
          }
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
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }, { pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, message: 'Please input correct your number!' }]}
      >
        <Input style={{ width: '100%' }}/>
      </Form.Item>

      <Form.Item 
        label="Birthday"
        name='birth'>
        <DatePicker />
      </Form.Item>

      <Form.Item 
      name="gender" 
      label="Gender"
      rules={[{ required: true, message: 'Please pick your gender!' }]}>
        <Radio.Group>
          <Radio value={true}>Male</Radio>
          <Radio value={false}>Female</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your Address!',
          },
        ]}
      >
        <Input />
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
          Đã có tài khoản ? <Link to='/mobile/login'>Đăng nhập ở đây</Link>
      </span>
      
    </Form>
    </Spin>
    </div>
    </>
  )
}
