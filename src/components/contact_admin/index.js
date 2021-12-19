import React, { useEffect } from 'react';
import { Layout, Tabs, Breadcrumb, Space, Badge } from 'antd';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import ContactTable from './contactTable';
import { getListContact, updateContact } from '../../redux/actions/contact';

function Contact() {
    const { TabPane } = Tabs;
    const dispatch= useDispatch();
    const contact = useSelector(state=> state.contact);
    console.log('contact :>> ', contact);

    const changeStatusContact = (id) => {
      const body ={
        id: id,
        body: {
          Status: true,
        }
      }
      console.log('body :>> ', body);
      dispatch(updateContact(body));
    }

    useEffect(()=>{
      dispatch(getListContact());
    },[dispatch, contact?.status]);

    return (
      <div>
        <Breadcrumb style={{ margin: "24px 0" }} separator=">">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Liên hệ của khách hàng</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background catalog">
          <Tabs type="card">
            <TabPane
              tab='Chưa phản hồi'
              key='ChuaPhanHoi'
            >
              <ContactTable
                data={contact?.contact?.filter(e => e.Status=== false)}
                Status={false}
                changeStatusContact={changeStatusContact}
                loading={contact.load}
              />
            </TabPane>
            <TabPane
              tab='Đã phản hồi'
              key='DaPhanHoi'
            >
              <ContactTable
                data={contact?.contact?.filter(e => e.Status=== true)}
                Status={true}
                loading={contact.load}
              />
            </TabPane>
          </Tabs>
        </Layout>
      </div>
    );
}

export default Contact;