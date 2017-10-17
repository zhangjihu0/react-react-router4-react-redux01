import React,{Component} from 'react';
import './index.less'
export default class HeaderComponent extends Component{
render(){
    return( 
            <div className="back header-component">
                <span>
                    <i onClick={this.back.bind(this)} className="iconfont icon-fanhui"></i>
                    {this.props.title}
                </span>
            </div>
        )
    }
    back(){
        if(this.props.back){
            // 手动调转到指定的路径；
            this.props.history.push(this.props.back)
        }else{
            this.props.history.go(-1);
        }
       
    }
}