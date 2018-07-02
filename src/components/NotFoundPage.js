import React from 'react';
import { WingBlank } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div style={styles.placeholderstyle} className={`${className} `} {...restProps}>404</div>
  );
export default class notfound extends React.Component {
  render() {
    return (
        <div style={{ padding: '15px 0' }}>
        <WingBlank size="md"><PlaceHolder /></WingBlank>
      </div>
    );
  }
}
const styles = {
    placeholderstyle:{
        backgroundColor: '#ebebef',
        color: '#bbb',
        textAlign: 'center',
        height: '30px',
        lineHeight: '30px',
        width: '100%'
    }
}