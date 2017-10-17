import React,{Component} from 'react';
export default class UserInfo extends Component{

    render(){

        return(
            <div>
               {
                   this.props.userInfo.username
               }
               {
                   this.props.userInfo.cityName
               }
            </div>
        )
    }
    // 检查是否登录如果没有登录过 跳转到等登录页
}