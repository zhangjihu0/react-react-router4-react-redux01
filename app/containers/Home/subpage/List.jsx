import React,{Component} from 'react';
import { getList } from '../../../fetch/home/index.jsx';
import ListComponent from "../../../components/ListComponent/index.jsx";
import LoadMore from "../../../components/ListComponent/LoadMore/index.jsx";
export default class List extends Component{
    constructor(){
        super();
        this.state = {
            hasMore:true,//是否有更多数据
            data:[],//数据
            page:0,//页码
            isloading:true//是否正在加载
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.data.length>0?<ListComponent data={this.state.data} />:<div>正在加载。。。</div>
                }
                <LoadMore 
                    hasMore={this.state.hasMore} 
                    loadMore={this.loadMore.bind(this)}
                    isloading={this.state.isloading}
                     />
            </div>
            )
    }
    componentDidMount(){
      this.processData(getList(this.props.cityName,0));
    }
    //在当前写一个加载更多的函数，传递给loadMore，当点击按钮，触发传递函数 
    loadMore(){
        console.log("loading。。。。");
        this.setState({
            page:this.state.page+1,
            isloading:true//每次加载更多时状态为正在加载;
        },()=>{//这个函数可以获取到最新的页码状态
            this.processData(getList(this.props.cityName,this.state.page))
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