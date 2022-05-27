import { Modal, Form, Input, DatePicker, Radio } from 'antd';
import { userAction } from '../../store';
import { useDispatch } from 'react-redux';

export default function SignupForm({ ...props }) {

    const dispatch = useDispatch();
    const { openForm, clickClose } = props;     
    const [form] = Form.useForm();

    return(
        <>
        <div className="signup-form-style">
        <Modal
        title="Sign up"
        visible={openForm}
        onOk={() => {
          form.validateFields()
            .then(values => {
              dispatch(userAction.SignupAction(values));
              clickClose();
            })
            .catch(err => {})
        }}
        // confirmLoading={confirmLoading}
        onCancel={() => clickClose()}
      >

<Form
      form={form}
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

    </Form>          
        
      </Modal>
        </div>
        </>
    )
}