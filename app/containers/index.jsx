// 根据routes 实施路由跳转；
import React,{Component} from 'react';
import RouterMap from './routes/index.jsx';
export default class App extends Component{
    constructor(){
        super();
        this.state={
            done:false
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.done? <RouterMap/>:<div>正在加载。。。</div>
                }
               
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            done:true
        })
    }
}