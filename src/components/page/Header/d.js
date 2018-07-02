// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.min.css';

// var Player = React.createClass({
// 	getDefaultProps: function() {
// 		//歌单列表
// 		return{
//         	"tracks": [
//         	{
//                 "name": "元日",
//                 "artists": [
//                     {
//                         "name": "于文华",
//                     }
//                 ],
//                 "album": {
//                     "name": "国学唱歌集",
//                     "picUrl": "http://p3.music.126.net/SR9eFEjRB0NsscxN7-fHMw==/3344714372906000.jpg",                    
//                 },
//                 "duration": 136829,
//                 "mp3Url": "http://m2.music.126.net/rUcfqqZbq7TIfJeAHfTrkw==/3376600210116829.mp3"
//             },
//             {
//                 "name": "元日 ",
//                 "artists": [
//                     {
//                         "name": "清弄",
//                     }
//                 ],
//                 "album": {
//                     "name": "热门华语261",
//                     "picUrl": "http://p4.music.126.net/ly2FJHh5-lYMdC3NZxvavQ==/7714173580661848.jpg",
//                 },
//                 "duration": 109000,
//                 "mp3Url": "http://m2.music.126.net/jwwZVlWJ78HEarft42uKUQ==/7906588115920636.mp3"
//             },
//             {
//                 "name": "青龙·花木苍苍",
//                 "artists": [
//                     {
//                         "name": "五色石南叶",
//                     }
//                 ],
//                 "album": {
//                     "name": "热门华语234",
//                     "picUrl": "http://p4.music.126.net/tHAfnugCElS93EDp5cHLIw==/8909342719897560.jpg",
//                 },
//                 "duration": 295575,
//                 "mp3Url": "http://m2.music.126.net/rnq_W32zFX_utQbBhE0xkg==/8934631487358481.mp3"
//             }]
// 		}	
// 	},

// 	//初始化状态
// 	getInitialState: function() {
// 		return{
// 		    currentTrackLen: this.props.tracks.length, //歌单歌曲数
// 		    currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
// 		    currentTime: 0, //当前歌曲播放的时间
// 		    currentTotalTime: 0, //当前歌曲的总时间
// 		    playStatus: true, //true为播放状态，false为暂停状态
// 		}
// 	},

// 	//更新播放状态
// 	updatePlayStatus: function(){
// 		let audio = document.getElementById('audio');
// 		if(this.state.playStatus){
//             audio.play();
//         }else{
//             audio.pause();
//         }

//         //更新当前歌曲总时间
//         this.setState({currentTotalTime: this.props.tracks[this.state.currentTrackIndex].duration / 1000});
// 	},

// 	//播放事件处理
// 	play:function(){
// 		//这里有setState是异步的，需要在回调中执行
// 		this.setState({playStatus:!this.state.playStatus}, ()=>{
// 			this.updatePlayStatus();
// 		});
// 	},

// 	//上一曲事件处理
// 	previous:function(){
// 		if(this.state.currentTrackIndex - 1 < 0){
//             alert('已经没有上一首了');
//         }else{
//             this.setState({currentTrackIndex:--this.state.currentTrackIndex},()=>{
//             	this.updatePlayStatus();
//             });
//         }        
// 	},

// 	//下一曲事件处理
// 	next:function(){
// 		if(this.state.currentTrackIndex + 1 >=  this.state.currentTrackLen){
//             alert('已经没有下一首了');
//         }else{
//             this.setState({currentTrackIndex:++this.state.currentTrackIndex},()=>{
//             	this.updatePlayStatus();
//             });            
//         }
// 	},

// 	//DOM加载完
// 	componentDidMount: function(){		
// 		this.updatePlayStatus();
// 		setInterval(()=>{
// 			let audio = document.getElementById('audio');
// 			this.setState({currentTime:audio.currentTime},()=>{
// 				if(~~this.state.currentTime >= ~~this.state.currentTotalTime){
// 		            this.next();
// 		        }
// 			});
// 		}, 300);
// 	},
// 	render: function() {		
// 		return (
// 			<div className="player">
// 				{/* 播放器名称  */}
// 				<div className="header">音乐播放器.React版</div>				

// 				{/* 音乐专辑图  */}
// 				<TrackInfo track={this.props.tracks[this.state.currentTrackIndex]} />

// 				{/* 音乐信息   */}
// 				<Progress progress={this.state.currentTime / this.state.currentTotalTime * 100 + '%'} />

// 				{/* 播放进度条  */}
// 				<Controls isPlay={this.state.playStatus} onPlay={this.play} onPrevious={this.previous} onNext={this.next} />

// 				{/* 播放时间   */}
// 				<Time currentTime={this.state.currentTime} currentTotalTime={this.state.currentTotalTime} />

// 				{/* 音频控件  */}
// 				<audio id="audio" src={this.props.tracks[this.state.currentTrackIndex].mp3Url}></audio>
// 			</div>
// 		);
// 	}
// });

// var TrackInfo = React.createClass({
// 	render: function() {
// 		return(
// 		<div>
// 		<div className="albumPic" style={{'backgroundImage':'url('+ this.props.track.album.picUrl +')'}}></div>
// 		<div className='trackInfo'>
//  			<div className="name">{this.props.track.name}</div>
//             <div className="artist">{this.props.track.artists[0].name}</div>
//             <div className="album">{this.props.track.album.name}</div>			
//         </div>
//         </div>
// 		);
// 	}
// });

// var Progress = React.createClass({
// 	render: function(){
// 		return 	(
// 			<div className="progress" style={{'width':this.props.progress}}></div>
// 		)
// 	}
// });

// var Controls = React.createClass({
// 	render: function(){
// 		let className;
// 		if(this.props.isPlay == true){
// 			className = 'icon-pause';
// 		}else{
// 			className = 'icon-play';
// 		}
// 		return (
//         <div className="controls">
//             <div className="play" onClick={this.props.onPlay}>
//                 <i className={className}></i>
//             </div>
//             <div className="previous" onClick={this.props.onPrevious}>
//                 <i className="icon-previous"></i>
//             </div>
//             <div className="next" onClick={this.props.onNext}>
//                 <i className="icon-next"></i>
//             </div>
//         </div>  			
// 		)
// 	}
// });

// var Time = React.createClass({
// 	timeConvert: function(timestamp){
// 	    var minutes = Math.floor(timestamp / 60);
// 	    var seconds = Math.floor(timestamp - (minutes * 60));

// 	    if(seconds < 10) {
// 	      seconds = '0' + seconds;
// 	    }

// 	    timestamp = minutes + ':' + seconds;
// 	    return timestamp;
// 	},	
// 	render:function() {
// 		return(
//       	<div className="time">
//             <div className="current">{this.timeConvert(this.props.currentTime)}</div>
//             <div className="total">{this.timeConvert(this.props.currentTotalTime)}</div>
//         </div>			
// 		);
// 	}
// });

// ReactDOM.render(
// 	<Player />,
// 	document.getElementById('root')
// );