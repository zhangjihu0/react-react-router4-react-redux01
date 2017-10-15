import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index.jsx";
import { connect } from 'react-redux';
import * as Actions from '../../actions/userInfo.jsx';//拿到所有actionCreator 的对象；
import { bindActionCreators } from 'redux';
import LoginComponent from '../../components/LoginComponent/index.jsx';
class Login extends Component{
    constructor(){
        super();
        this.state = {
            login:false//默认没有登录过，写一个方法校验是否登录；默认不显示登录组件
        }
    }
    render(){
        return(
            <div>
                {/* 如果登录过显示登录组件，否则不显示直接跳转用户页面 */}
                <HeaderComponent title="登录" history={this.props.history} />
                {
                    !this.state.login?<LoginComponent login = {this.login.bind(this)} />:<div>login</div>
                }
            </div>
        )
    }
    //在这里我们需要写一个方法；这个方法是登陆的，将用户名存到redux中；
    login(userName){
        console.log(this.props.userInfo);
        let info = this.props.userInfo;
        info.username = userName;
        //更新redux中的state
        this.props.userActions.update(info);
        //登录成功后跳转到用户页面
        if(this.props.match.params.route){
            console.log(this.props.match.params.route);
            this.props.history.push(this.props.match.params.route)
        }else{
            //如果没指定跳回那个页面 默认回到用户页面
            this.props.history.push('/user')
        }
       
    }
    componentDidMout(){
        this.checkLogin();
    }
    checkLogin(){//检查是否登录，在redux中 state.userInfo中，是否有username，如果有则登录过
        if(this.props.userInfo.username){
            this.props.history.push('/user');
        }
        this.setState({
            login:true,//显示登录组件

        })
    }
}
export default connect(state=>{
    console.log('jihud',state);
        return {
            userInfo:state.userInfo
        }
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login)