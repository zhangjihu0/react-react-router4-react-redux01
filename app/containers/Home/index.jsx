import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index.jsx';
import Slider from '../../components/Slider/index.jsx';
import Ad from './subpage/Ad.jsx';
import { connect } from 'react-redux';
import List from "./subpage/List.jsx";
class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} />
                <Slider/>
                <Ad />
                <List cityName={this.props.userInfo.cityName} />
            </div>
            
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}//取出redux state中userInfo的数据，赋予给变量userInfo
    }
)(Home)
//取出redux 中的城市传递给HomeHeader 组件