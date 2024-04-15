/* eslint-disable no-template-curly-in-string */
import {
  Button,
  Card,
  Form,
  FormInstance,
  FormItemProps,
  Input,
  Space,
} from 'antd';
import React from 'react';

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[],
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix],
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Form.Item name={concatName} {...props} />;
};

const validateMessages = {
  required: '${label} is required.',
};

interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

export default function AddTaskCard() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    form.setFieldsValue({
      update: {
        title: undefined,
        details: undefined,
        links: undefined,
      },
    });
  };

  return (
    <Card
      style={{
        height: '44vh',
        borderRadius: '20px',
        margin: '20px 25px',
        overflow: 'scroll',
      }}
    >
      <div
        style={{
          textAlign: 'left',
          fontSize: '18px',
          margin: '10px',
        }}
      >
        Add Update
      </div>
      <Form
        form={form}
        name="form_item_path"
        layout="vertical"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <MyFormItemGroup prefix={['update']}>
          <MyFormItem name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </MyFormItem>
          <MyFormItem
            name="details"
            label="Details"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </MyFormItem>
          <MyFormItem name="links" label="Links">
            <Input.TextArea />
          </MyFormItem>
        </MyFormItemGroup>

        <Form.Item>
          <Space>
            <SubmitButton form={form}>Submit</SubmitButton>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
}
