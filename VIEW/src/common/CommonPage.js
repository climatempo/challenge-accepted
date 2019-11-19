import '../../public/css/animations.css';
import '../../public/css/common.css';

import React, { Component } from 'react';
import { Layout, Row, Col, Tooltip } from 'antd';

const { Header, Content } = Layout;

/**
 * Container principal
 */
export default class CommonPage extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
      currentMenu: '',
      menu: []
    };
  }

  componentDidMount() {
    let page = location.pathname.split('/')[2];
    if (page !== this.state.currentMenu) {
      this.setState({ currentMenu: page });
    }
  }

  toggleMenu = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  redirect = path => {
    this.setState({ currentMenu: path });
    if (window.innerWidth < 800) {
      this.setState({ collapsed: true });
    }
  };

  getPageTitle = () => {
    let item = this.state.menu.filter(item => item.key === this.state.currentMenu)[0];
    if (item) return item.label;
  };

  render() {
    let prefix = ""
    return (
      <Layout>
        <Layout>
          <Header>
            <Row type="flex" justify="space-around" align="middle">
              <img className="logo" src={require('../../public/images/logo.png')} />
            </Row>
          </Header>
          <Content>
            <div className="master-container">{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
