import React, { useContext, useState } from 'react'
import { Table, Form, Input, Button } from 'antd';
import { selectUser } from '../../features/user/UserSlice'
import { useSelector, useDispatch } from 'react-redux'
import { LoginContext } from '../../contexts/loginContext'
import store from '../../app/store'
import { useHistory } from 'react-router-dom';
export default function User() {
    const history = useHistory();
    if (!store.getState().isAuthenticated) {
        history.push('/login')
    }
    const users = useSelector(selectUser)
    const dispatch = useDispatch()
    //const { isAuthenticated } = useContext(LoginContext)
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;
    return <div>
        <h1 className="title-author">Welcom Author</h1>
        <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{
                layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}
        >
            <Form.Item label="Name">
                <Input placeholder="your name" />
            </Form.Item>
            <Form.Item label="Age">
                <Input placeholder="your age" />
            </Form.Item>
            <Form.Item label="Address">
                <Input placeholder="your address" />
            </Form.Item>
            <Form.Item {...buttonItemLayout} >
                <Button type="primary">Submit</Button>
                <Button type="primary" className="author-form-cancel">Cancel</Button>
            </Form.Item>
        </Form>
        <Table dataSource={dataSource} columns={columns} />;
        </div>
}
