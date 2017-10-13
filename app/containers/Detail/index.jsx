import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index.jsx";
import Info from "./subpage/Info.jsx";
import Comment from './subpage/Conment.jsx';
//通过路由渲染的组件都会在this.props上添加很多属性，例如history,match... 
export default class Detail extends Component{
    render(){
        console.log(this.props);
        return(
                <div>
                    {/*头部  */}
                    <HeaderComponent title="商户详情" history={this.props.history} />
                    {/* 商户 */}
                    <Info id={this.props.match.params.id} />
                    {/* 购买和收藏 */}

                    {/* 评论 */}
                    <Comment id={this.props.match.params.id} />
                </div>
            )
        }
}