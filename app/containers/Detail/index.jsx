import React,{Component} from 'react';
import { connect } from 'react-redux';
import HeaderComponent from "../../components/HeaderComponent/index.jsx";
import Buy from "../../components/Buy/index.jsx";
import Info from "./subpage/Info.jsx";
import Comment from './subpage/Conment.jsx';
import * as Actions from '../../actions/store.jsx';
import {bindActionCreators} from 'redux';
//通过路由渲染的组件都会在this.props上添加很多属性，例如history,match... 
class Detail extends Component{
    constructor(){
        super()
        this.state={
            isStore:false
        }
    }
    render(){
        console.log(this.props);
        return(
                <div>
                    {/*头部  */}
                    <HeaderComponent title="商户详情" history={this.props.history} />
                    {/* 商户 */}
                    <Info id={this.props.match.params.id} />
                    {/* 购买和收藏 */}
                    <Buy buy = {this.buy.bind(this)} store ={this.store.bind(this)} isStore={this.state.isStore}  />
                    {/* 评论 */}
                    <Comment id={this.props.match.params.id} />
                </div>
            )
        }
        componentDidMout(){
            //先从redux 中获取收藏列表[],如果有显示已收藏，如果没有显示未收藏；
           // 1.拿到当前的商户id
            let id = this.props.match.params.id;
            // 2.去收藏的数据中查询。
            // 数组的some 如果数组中返回则返回true 否则返回false 
            //some 一个为真就返回真，没有返回假，
            // every 每个为真才为真，有false，就返回false
            // filter 返回满足条件的真实值；
            console.log(this.props.store);
            console.log(this.props.store);
            let flag = this.props.store.some(item=>item===id);  
            if(flag){//收藏过改变状态为收藏，
                this.setState({
                    isStore:flag
                })
            }
        }
        checkLogin(){
            //检测是否登录，登录过返回true未登录返回false
            if(this.props.userInfo.username){
                return true
            }
            return false;
        }
        buy(){//购买
            console.log('buy'); 
           let flag =  this.checkLogin();
            if(flag){
                this.props.history.push('/user');
            }else{
                //如果登录成功后，还要跳回当前页 // /login/detail/123213 /login/asdasd
                // encodeURIComponent
                this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
            }
            //如果登录成功点击购买
            //

        }
        store(){//收藏
            //先验证是否登录，如果没登录让他去登陆，如果登陆成功让他跳回详情页；
            let flag = this.checkLogin();
            if(!flag){//如果没登录 则跳转到登录页；
                this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
            }
            let id = this.props.match.params.id
            if(this.store.isStore){
                this.props.storeActions.remove(id);
                //在store中移除掉
            }else{
                this.props.storeActions.add(id);
                //添加到store
            }
            this.setState({
                isStore:!this.state.isStore
            })
        }

}
    export default connect(
        state=>{
            return {
                userInfo:state.userInfo,
                store:state.store //这里存放的是收藏的数组
            }
        },
        dispatch=>{
            return {
                storeActions:bindActionCreators(Actions,dispatch)
            }
        }
    )(Detail)