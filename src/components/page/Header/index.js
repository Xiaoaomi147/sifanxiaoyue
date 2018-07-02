import React from 'react';
import { Drawer, List, NavBar, Icon  } from 'antd-mobile';
import { Link , Switch , Route ,Redirect} from 'react-router-dom';
import Home from '../home/home.js';
import Seeting from '../setting/seeting';
import NotFoundPage from '../../NotFoundPage';
import PageItem from '../Grid/pageItem';
import { connect } from 'react-redux';
import { aslleft, asl_ellipsis } from '../../../actions/ASL.js';
import './index.css';

const menu = [
  {
    name:'Music',
    path:'/Home',
    thumb:require('../../../images/myspace.png')
  },
  {
    name:'Setting',
    path:'/Home/Seeting',
    thumb:require('../../../images/digg.png')
  },
  {
    name:'登出',
    path:'/Login',
    thumb:require('../../../images/aim.png')
  }
]
const Router = () => (
    <main>
      <Switch>
        <Route path='/Home' exact render={()=> (<Redirect to={{pathname: '/Home/Main'}}/>)}/>
        <Route path='/Home/Main' component={Home}/>
        <Route path='/Home/Seeting' component={Seeting}/>
        <Route path='/Home/PageItem' component={PageItem}/>
        <Route path="/Home/*" component={NotFoundPage} />
      </Switch>
    </main>
  )
  
class Header extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        open: false,
        data: ['1', '2', '3'],
        playStatus: false,
        docked: false,
      }
  }
//   componentWillMount(){
//     console.log('componentWillMount','1')
//   }
//   componentDidMount(){
//     console.log('componentDidMount','2')
//   }
//   componentWillReceiveProps(nextProps){
//  console.log('componentWillReceiveProps',nextProps,'3')
//   }
//   // shouldComponentUpdate(nextProps, nextState){
//   //   console.log('shouldComponentUpdate',nextProps, nextState,'4')
//   // }
//   componentWillUpdate(){
//     console.log('componentWillUpdate','5')
//   }
//   componentDidUpdate(){
//     console.log('componentDidUpdate','6')
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount','7')
//   }
componentWillUnmount(){
  this.setState =()=>{
      return
  }
}
    onDock(d){
      this.setState({
        [d]: !this.state[d],
      });
    }
  onOpenChange = (...args) => {
    console.log(args);
    // this.audioAutoPlay();
    this.setState({ open: !this.state.open });
  }
  wertrere (){
    console.log('23454324',this.props)
    this.props.asl_ellipsis();
    this.props.history.push('/Home/Main')
  }
  updatePlayStatus(){
		let audio = document.getElementById('audio');
		if(!this.state.playStatus){
            audio.play();
            this.setState({playStatus:true})
        }else {
            audio.pause();
            this.setState({playStatus:false})
        }
    document.addEventListener('WeixinJSBridgeReady', function () {
        if(!this.state.playStatus){
          audio.play();
          this.setState({playStatus:true})
      }else {
          audio.pause();
          this.setState({playStatus:false})
        }
    }, false);
    }
    render() {
    let { isLeft, title } = this.props.ASL;
      const sidebar = (<List>
        {menu.map((value, index) => {
            return (<Link to={value.path} key={index}><List.Item 
              thumb={value.thumb}
              multipleLine
            >{value.name}</List.Item></Link>);
        })}
      </List>);
  
      return (
        <div>
        <NavBar className='am-navbar2'
        icon={<Icon type={isLeft ? 'left' : 'ellipsis'} />}
        onLeftClick={()=>{isLeft ? this.wertrere()  : this.onDock('docked')}}
        rightContent={
        <img onClick={()=>this.updatePlayStatus()}
         src={require('../../../images/music.png')}
         className={this.state.playStatus?('img_zhuan'):('img_zhuan2')} />}>{title}</NavBar>
          <Drawer
              className="my-drawer"
              style={{ minHeight: document.documentElement.clientHeight }}
              contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
              sidebarStyle={{ marginTop: '40px' }}
              sidebar={sidebar}
              docked={this.state.docked}
          >
            <Router />
          </Drawer>
          <audio id="audio" src={'http://ip.h5.rh03.sycdn.kuwo.cn/cdb39cb5992a08c5118a1a7ca1dedf06/5b2205ba/resource/a3/28/36/3217850108.aac'} loop controlsList="nodownload" >
                您的浏览器不支持 audio 元素
        </audio>
      </div>
        
      );
    }
  }

function mapStateToProps({ ASL }) {
  return {
      ASL
  };
}
export default connect(mapStateToProps,{ aslleft, asl_ellipsis })(Header);