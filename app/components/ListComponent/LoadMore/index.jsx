import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
	render(){
		return(
			<div className="has-more">
				{this.props.hasMore?<div ref="more" onClick={this.LoadMore.bind(this)}>加载更多</div>:<div>我是有底线的</div>}	
			</div>
		)
	}
	componentDidMount(){
		//绑定滚动事件
		this.fn = ()=>{
			clearTimeout(this.timer)//清除掉旧定时器；
			this.timer = setTimeout(()=>{//事件节流;
				//先判断是否正在加载，
				//判断按钮距离屏幕顶端的高度和视口的高度 
				console.log('滚动');
				if(this.props.isloading){
					return;
				}
				let screen = window.screen.height;
				let top = this.refs.more.getBoundingClientRect().top;//获取当前元素的位置；上下左右；
				console.log(top)
				if(top<screen){
					this.props.loadMore();
				}
			},50)
		}
		window.addEventListener('scroll',this.fn);
	}
	componentWillUnmount(){
		//移除滚动事件
		window.removeEventListener('scroll',this.fn);
	}

	LoadMore(){//调用父级传递过来的函数；
		if(this.props.isloading){
			return;
		}
		this.props.loadMore()
	}
}