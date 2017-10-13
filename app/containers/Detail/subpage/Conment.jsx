import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail/index.jsx';
import CommentComponent from "../../../components/CommentComponent/index.jsx";
import LoadMore from "../../../components/ListComponent/LoadMore/index.jsx";
export default class Comment extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            isloading:true,
            hasMore:false,
            page:0
        }
    }
    render(){
        // let {userName,starNum,comment} = this.props.data;
        return(
            <div>
                {this.state.data.length>0?<CommentComponent  data={this.state.data} />:<div>正在加载。。。</div>}
                <LoadMore 
                    hasMore={this.state.hasMore} 
                    loadMore={this.loadMore.bind(this)}
                    isloading={this.state.isloading}
                    />
            </div>
        )
    }
    componentDidMount(){
          getComment(this.props.id,this.state.page).then(res=>res.json()).then(data=>{
            this.setState({data:data.data})
          })     
    }
    loadMore(){
        console.log("loading。。。。")
        this.setState({
            page:this.state.page+1,
            isloading:true//每次加载更多时状态为正在加载;
        },()=>{//这个函数可以获取到最新的页码状态
            this.processData(getComment(this.props.id,this.state.page))
        });
    }
    //处理 成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isloading:false
            },()=>{console.log(data)})
        })
    }

}