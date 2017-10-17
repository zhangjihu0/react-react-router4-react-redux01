import React,{Component} from 'react';
import { Link } from 'react-router-dom';
//主页头部组件
import './index.less';
export default class HomeHeader extends Component{
    render(){
        return(
            <div className="home-header back">
                <Link to="/city">
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-jiantouxia"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" />    
                </div>
                <Link to="/login">
                    <div className="profile">
                        <i className="iconfont icon-wode"></i>
                    </div>
                </Link>
            </div>
        )
    }
}