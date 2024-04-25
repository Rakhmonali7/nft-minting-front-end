import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header className="header">
        <nav>
          <div className="nav-left">
            <img src="/leaf-logo.svg" alt="" />
            <a href="#">Mintify</a>
          </div>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div className="nav-right">
            <input type="text" placeholder="Search atwork" />
            <img src="/Elements.svg" alt="" />
            <img src="/square-dot.svg" alt="" />
            <img src="/wallet-logo.svg" alt="" />
            <span>
              <UserOutlined className="custom-icon" />
              <p>Rakhmonali</p>
            </span>
          </div>
        </nav>
      </Header>
      <Layout>
        <Sider width="25%" className="sider" style={{ background: '#383940' }}>
          Sider
        </Sider>
        <Content className="content">Content</Content>
      </Layout>
    </Layout>
  );
}

export default App;
