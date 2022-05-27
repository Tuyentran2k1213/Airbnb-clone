import { Modal, Form, Input, Checkbox } from "antd";
import { userAction } from '../../store';
import { useDispatch } from "react-redux";

export default function LoginForm({...props}) {

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { openForm, clickClose } = props;

  return (
    <div className="login-form-style">
      <Modal
        title="Login"
        visible={openForm}
        onOk={() => {
          form.validateFields()
            .then(values => {
              dispatch(userAction.LoginAction(values));
              clickClose()
            })
            .catch(err => {})
        }}
        // confirmLoading={confirmLoading}
        onCancel={() => clickClose()}
      >

<Form
      form={form}
      name="login"
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
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>


    </Form>          
        
      </Modal>
    </div>
  )
}
