import React,{Component} from 'react';
import  { getAd } from  '../../../fetch/home/index.jsx'
import './index.less'
export default class Ad extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return(
                <div className="ad">
                    {this.state.data.length>0?this.state.data.map((item,index)=>{
                        return(<a href={item.link} key={index}>
                                    <img src={item.img} title={item.title} />
                               </a>)
                    }):<div>正在加载。。。</div>}
                </div>
            )
    }
    componentDidMount(){
        getAd().then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}