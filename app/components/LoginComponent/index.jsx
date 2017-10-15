import React,{Component} from 'react';
import './index.less';
export default class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            val:''
        }
    }
    render(){
        return(
            <div className="login-component">
                {/* ref 非受控 受控onchange * state * */}
                <input 
                    type="text" 
                    value={this.state.val} 
                    onChange={this.changeValue.bind(this)}
                    placeholder="请输入用户名"
                 />
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
    changeValue(e){
        this.setState({
            val:e.target.value
        })
    }
    login(){
        //调用登录方法；
        console.log(this.state.val)
        this.props.login(this.state.val);
    }
}