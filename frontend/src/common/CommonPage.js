import '../../public/css/common.css';

import React, { Component } from 'react';

import { Layout } from 'antd';

const { Header, Content } = Layout;

export default class CommonPage extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <div className="logo" />
        </Header>
        <Content>{this.props.children}</Content>
      </Layout>
    );
  }
}
