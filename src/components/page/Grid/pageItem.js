import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { ListView, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { aslleft } from '../../../actions/ASL.js';
import ReactDOM from 'react-dom';
import api from '../../unilt';
import './pageItem.css';
  let A = 2;
  let B = 3;

class pageItem extends React.Component{
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        });
    
        this.state = {
          dataSource,
          refreshing: true,
          isLoading: true,
          height: document.documentElement.clientHeight,
          useBodyScroll: false,
          rData:[],
          api:'napi/photos?'
        };
      }
      componentWillUnmount(){
        this.setState =()=>{
            return
        }
      }
      componentDidUpdate() {
        if (this.state.useBodyScroll) {
          document.body.style.overflow = 'auto';
        } else {
          document.body.style.overflow = 'hidden';
        }
      }

      componentDidMount () {
        this.setState({api:this.props.location.state.data},()=>{
            this.DidMountApi();
        })
      }
      DidMountApi(){
      let url;
        if(this.props.location.state.search){
          url = `https://unsplash.com/napi/search?query=${this.props.location.state.search}&xp=&per_page=3`;
        }else{
          url = `https://unsplash.com/${this.state.api}page=1&per_page=3&order_by=latest`;
        }
        api(url)
        .then((res)=>{
            console.log(res);
            this.rData = this.props.location.state.search ? res.data.photos.results : res.data;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                height: hei,
                refreshing: false,
                isLoading: false
              });
              
        })
        .catch((error)=>{
            console.log(error);
        })
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    }
    
      onEndReached = (event) => {
          console.log(this.state.dataSource)
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        let url;
        if(this.props.location.state.search){
          url = `https://unsplash.com/napi/search/photos?query=${this.props.location.state.search}&xp=&per_page=${B}&page=${A}`;
        }else{
          url = `https://unsplash.com/${this.state.api}page=${A}&per_page=${B}&order_by=latest`;
        }
        api(url)
        .then((res)=>{
            console.log(res);
            let arr = this.props.location.state.search ? res.data.results : res.data;
            this.rData = [...this.rData,...arr];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false
              });
              A = (A-0) + 1;
        })
        .catch((error)=>{
            console.log(error);
        })
      };

      render() {
        const separator = (sectionID, rowID) => (
          <div
            key={`${sectionID}-${rowID}`}
            style={{
              backgroundColor: '#F5F5F9',
              height: 8,
              borderTop: '1px solid #ECECED',
              borderBottom: '1px solid #ECECED'
            }}
          />
        );
        const row = (rowData, sectionID, rowID) => {
          return (
            <WingBlank size="md">
                <WhiteSpace size="md" />
                <Card>
                <Card.Header
                    title={rowData.user.last_name}
                    thumb={rowData.user.profile_image.small}
                    extra={<span>{moment(rowData.created_at).format('MM月DD日 hh:mm')}</span>}
                />
                <Card.Body className='am-card-body2'>
                    <div style={{width:'100%'}}><img style={{width:'100%'}} src={rowData.urls.regular}/></div>
                </Card.Body>
                <Card.Footer content="上传于" extra={<div>{moment(rowData.updated_at).format('YY年MM月DD日 hh:mm')}</div>} />
                </Card>
                <WhiteSpace size="md" />
            </WingBlank>
          );
        };
        return (<div>
          <ListView
            key={this.state.useBodyScroll ? '0' : '1'}
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderHeader={()=>(<span style={{ padding: 40, textAlign: 'center' }}></span>)}
            renderFooter={() => (<span style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? '正在====前往unsplash.com加载图片' : 'Loaded'}
            </span>)}
            renderRow={row}
            renderSeparator={separator}
            useBodyScroll={this.state.useBodyScroll}
            style={this.state.useBodyScroll ? {} : {
              height: this.state.height
            }}
            onEndReached={this.onEndReached}
            pageSize={5}
          />
        </div>);
      }
}
function mapStateToProps({ ASL }) {
    return {
        ASL
    };
  }
export default connect(mapStateToProps,{aslleft})(pageItem);