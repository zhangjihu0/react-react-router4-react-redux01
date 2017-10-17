import React,{Component} from 'react';
import './index.less';
export default class OrderListItem extends Component{
    constructor(props){
        super(props)
        //将属性转换成自己的状态；
        this.state={
            commentState:props.data.commentState,
        },
        this.changeState=this.changeState.bind(this)
    }
    render(){
        let {id,commentState,img,title,count,price} = this.props.data;
        console.log(this.props.data)
        return(
            <div>
                <div className="order-list-item">
                    <img src={img} alt=""/>
                    <div className="list-content">
                        <h3>商户:{title}</h3>
                        <span>数量:{count}</span> 
                        <span>价格:{price}</span>
                    </div>
                    <div className="order-btn">
                        {/*默认有三个状态 0表示未评价 1表示正在评价，2表示评价完成 */}
                        {
                            this.state.commentState ===0?<button  onClick={this.changeCommentState.bind(this)}>评价</button>:this.state.commentState===1?null:<button className="unselect">评论</button>
                        }
                    </div>
                </div>
                {/*点击正在评价时，出现评论框  */}
                {
                    this.state.commentState ===1?<div className="comment-area">
                        <textarea ref = { ref=>this.comment = ref }></textarea>
                        <div>
                            <button onClick={this.sureCommit.bind(this)}>确认评价</button>
                            <button onClick={this.cancel.bind(this)}>取消</button>
                        </div>  
                    </div>:null
                }
            </div>
            
        )
    }
    changeState(){
        this.setState({
            commentState:2
        })
    }
    //确认提交；
    sureCommit(){
        this.props.commitComment(this.props.data.id,this.comment.value,this.changeState);
    }
    changeCommentState(){
        // 改变状态为评价中；
        this.setState({
            commentState:1
        })
    }
    cancel(){
        this.setState({//改变状态为未评价状态；
            commentState:0
        })
    }
}