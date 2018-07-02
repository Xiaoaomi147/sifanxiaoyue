import React from 'react';
import './login.css';
import { WingBlank , List, InputItem , Toast , Button , WhiteSpace} from 'antd-mobile';
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      value: ''
    };
  }
  
  onChange = (value) => {
    if (value.replace(/\s/g, '').length > 8) {
      this.setState({
        hasError: true
      });
    } else {
      this.setState({
        hasError: false
      });
    }
    this.setState({
      value
    });
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('不大于 8 位数');
    }
  }
  GoHome = () =>{
    this.props.history.push('/Home/Main')
  }
  render() {
    return (
      <div style={{ padding: '15px 0' }}>
        <WingBlank size="md">
          <List renderHeader={() => '账号密码登录'}>
            <InputItem
              type="phone"
              placeholder="186 8888 8888"
            >手机号码</InputItem>
            <InputItem
              type="password"
              placeholder="********"
              error={this.state.hasError}
              onChange={this.onChange}
              onErrorClick={this.onErrorClick}
              value={this.state.value}
            >密码</InputItem>
        </List>
        <WhiteSpace />
        <Button loading={false} onClick={this.GoHome} >loading button</Button>
        </WingBlank>
      </div>
    );
  }
}