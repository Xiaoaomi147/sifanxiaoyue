import React from 'react';
import { Carousel } from 'antd-mobile';
import './home.css';
import Grid from '../Grid';
// import {svg,use } from '../../../iconfont.js';
export default class home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[null,null,null,null,null,null,null],
      imgHeight: 176
    }
}
componentDidMount() {
  // simulate img loading
  setTimeout(() => {
    this.setState({
      data: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528966776481&di=fbb2ea9c2ccda7f0d243c0021aa15e38&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D2538816720%2C3871896907%26fm%3D214%26gp%3D0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528966841765&di=e1355f55a97ec4128916835f7df070a3&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2FL4viWR3FX1d5J5CHyAUF8g%3D%3D%2F187743809484094779.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528966841768&di=73d3347aa761d1c2e1ec5ef23b7e5a16&imgtype=0&src=http%3A%2F%2Fimg01.cztv.com%2F201504%2F20%2F6c983e89f9eb7ff54b766c807b827594.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528966841767&di=bc2f6617ae67c59acf1f2be72aea1bfe&imgtype=0&src=http%3A%2F%2Fimage.mamicode.com%2Finfo%2F201801%2F20180124235843898447.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528966814530&di=13cf532fcadef8749fa5391d077df574&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fwh%253D680%252C800%2Fsign%3D82cfae8d3efae6cd0ce1a3673783231c%2F2cf5e0fe9925bc3149844e2255df8db1ca1370aa.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528966941604&di=7d2b372b9ab63e19beac29cb9a057a84&imgtype=0&src=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F0%2F16%2F41%2F42%2F16414205_650277.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528966980160&di=314f15f2cf7101af7f956763e88857c0&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa686c9177f3e6709a283374330c79f3df9dc558e.jpg'
    ]
    });
  }, 1000);
}

  render() {

    return (
      <div>
          <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val,index) => (
            <a
              key={index}
              // href={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt={val}
                style={{ width: '100%',  height: '200px', verticalAlign: 'top'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* <svg class="icon" aria-hidden="true"><use href="#icon-yinle" /></svg> */}
        <Grid />
    </div>
      
    );
  }
}