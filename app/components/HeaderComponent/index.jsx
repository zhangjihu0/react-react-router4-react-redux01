import React,{Component} from 'react';
import './index.less'
export default class HeaderComponent extends Component{
render(){
    return( 
            <div className="back header-component">
                <span>
                    <i className="iconfont icon-fanhui"></i>
                    {this.props.title}
                </span>
            </div>
        )
    }
}