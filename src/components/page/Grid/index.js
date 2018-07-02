import React from 'react';
import { Grid } from 'antd-mobile';
import { connect } from 'react-redux';
import { aslleft } from '../../../actions/ASL.js';
import { Link , Switch , Route ,Redirect} from 'react-router-dom';
import './index.css';
const ArrayData = [
    {
        path:'/Home/PageItem',
        name:'雪',
        api:'napi/collections/542909/photos?',
        search:'',
        icon: 'https://images.unsplash.com/photo-1529909373889-f1a832e7d513?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=70796ad85dd7eed4d15959cefcfbf6e8'
    },
    {
        path:'/Home/PageItem',
        name:'橙',
        api:'napi/collections/2358/photos?',
        search:'',
        icon: 'https://images.unsplash.com/photo-1504716108314-51675355684a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=76d012f2114691d8465d7f37396b45ee'
    },
    {
        path:'/Home/PageItem',
        name:'Beautiful Shots From Above',
        api:'napi/collections/1922729/photos?',
        search:'',
        icon: 'https://images.unsplash.com/photo-1527515234283-d93c5f8486a0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a3f138f23c87d9e3e9ef272dd32fad'
    },
    {
        path:'/Home/PageItem',
        name:'Tree',
        api:'napi/search?query=tree&xp=&per_page=20',
        search:'tree',
        icon: 'https://images.unsplash.com/photo-1500215667712-fdbc1bfc0887?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=d7ec592cf5fe23f4f38f27b805a9f15a'
    },{
        path:'/Home/PageItem',
        name:'雪',
        api:'napi/collections/542909/photos?',
        search:'',
        icon: 'https://images.unsplash.com/photo-1525517710769-9f4fdb9e4099?ixlib=rb-0.3.5&s=b26936c3514068796ddb9198864681a8&auto=format&fit=crop&w=400&q=60'
    },{
        path:'/Home/PageItem',
        name:'雪',
        api:'napi/collections/542909/photos?',
        search:'',
        icon: 'https://images.unsplash.com/photo-1525517710769-9f4fdb9e4099?ixlib=rb-0.3.5&s=b26936c3514068796ddb9198864681a8&auto=format&fit=crop&w=400&q=60'
    },{
        path:'/Home/PageItem',
        name:'雪',
        api:'napi/collections/542909/photos?',
        search:'',
        icon: 'https://images.unsplash.com/photo-1525517710769-9f4fdb9e4099?ixlib=rb-0.3.5&s=b26936c3514068796ddb9198864681a8&auto=format&fit=crop&w=400&q=60'
    },{
        path:'/Home/PageItem',
        name:'雪',
        api:'napi/collections/542909/photos?',
        search:'',
        icon: 'https://images.unsplash.com/photo-1525517710769-9f4fdb9e4099?ixlib=rb-0.3.5&s=b26936c3514068796ddb9198864681a8&auto=format&fit=crop&w=400&q=60'
    },{
        path:'/Home/PageItem',
        name:'雪',
        api:'napi/collections/542909/photos?',
        search:'',
        icon: 'https://images.unsplash.com/photo-1525517710769-9f4fdb9e4099?ixlib=rb-0.3.5&s=b26936c3514068796ddb9198864681a8&auto=format&fit=crop&w=400&q=60'
    }
]

class Grid2 extends React.Component {
    constructor(props){
        super(props)
    }
render(){
    return(
        <div>
            <div className="sub-title">分   类</div>
            <Grid data={ArrayData}
            columnNum={3}
            isCarousel={false}
            renderItem={dataItem => (
                <Link to={{pathname:dataItem.path, state:{data:dataItem.api, search:dataItem.search}  }}
                style={{ padding: '12px', display:'inline-block'}}
                onClick={()=>this.props.aslleft(dataItem.name)}>
                    <img src={dataItem.icon} className="imgStyle" alt='' />
                    <div style={{ color: '#888', fontSize: '12px' }}>
                        <span>{dataItem.name}</span>
                    </div>
                </Link>
            )}
            />
    </div>
    )
}
}
function mapStateToProps({ ASL }) {
    return {
        ASL
    };
  }
export default connect(mapStateToProps,{aslleft})(Grid2);