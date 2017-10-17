import React,{Component} from 'react';
import { getOrderList,postComment } from '../../../fetch/orderList/index.jsx';
import OrderListComponent from '../../../components/OrderListComponent/index.jsx';
export default class OrderList extends Component{
    constructor(){
        super();
        this.state ={
            data:[]
        }
    }
    render(){
        return(
            <div>
                {this.state.data.length?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)} />:<div>正在加载...</div>}
            </div>
        )
    }
    // 提交评论内容到后台
    commitComment(id,comment,callback){ //内容 商户id callback 更改评论状态
        console.log(id,comment)
        // callback();
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            callback();//修改状态；
        });
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}