import React,{Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from "../../components/HeaderComponent/index.jsx";
import UserInfo from '../../components/UserInfo/index.jsx';
import OrderList from './subpage/OrderList.jsx'
import './index.less'
class User extends Component{
    render(){
        return(
            <div>
            {/* // 跳转后会回到登录页，检查是否登录，会再次跳转回来 */}
                <HeaderComponent title="用户信息" history={this.props.history} back="/"  />
                <UserInfo userInfo={this.props.userInfo} />
                {/*此处是订单列表页 */}
                <OrderList username={this.props.userInfo.username}  />
            </div>
        )
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo
        }
    }
)(User)