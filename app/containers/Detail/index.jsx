import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index.jsx";
import Buy from "../../components/Buy/index.jsx";
import Info from "./subpage/Info.jsx";
import Comment from './subpage/Conment.jsx';

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
                    <Buy  />
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
        }
        checkLogin(){
            //检测是否登录，登录过返回true未登录返回false
            if(this.props.userInfo.username){
                return true
            }
            return false;
        }
        buy(){//购买
           let flag =  this.checkLogin();
            if(flag){
                this.props.history.push('/user');
            }else{
                //如果登录成功后，还要跳回当前页 // /login/detail/123213 /login/asdasd
                this.props.history.push('/login/'+encodeURLComponent('/detail'+this.props.match.params.id));
            }
            //如果登录成功点击购买
            //

        }
        store(){//收藏
            //先验证是否登录，如果没登录让他去登陆，如果登陆成功让他跳回详情页；

        }

}
    export default connet(
        state=>{
            return {userInfo:state.userInfo}
        }
    )(Detail)