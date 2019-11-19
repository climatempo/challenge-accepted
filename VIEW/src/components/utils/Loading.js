import React, { Component } from 'react';
import { Alert, Col, Icon } from 'antd';

import ShowComponent from '../utils/ShowComponent';

export default class Loading extends Component {
  render() {
    return (
      <ShowComponent case={this.props.show}>
        <div className="app-loading">
          <Alert
            message="Aguarde..."
            description={this.props.message}
            type="info"
            icon={<Icon type="loading" />}
            showIcon
          />
        </div>
      </ShowComponent>
    );
  }
}
