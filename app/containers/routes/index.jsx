// 路由控制；
import React,{Component} from 'react';
//路由的；两种类型 HashRoute BrowerRoute(浏览器自带)
import { 
    HashRouter as Router,//提供路由容器
    Route, //每一条route，路由匹配；
    Switch //只匹配一次；
        } from 'react-router-dom';
import Home from '../Home/index.jsx'
import Detail from '../Detail/index.jsx'
export default class RouteMap extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        {/* 只有当前路径为/的时候才匹配路由switch 只匹配一个child 路由exact 绝对匹配 */}
                        <Route exact path='/' component={Home} />
                        <Route path='/detail/:id' component={Detail} />
                    </Switch>
                </Router>
            </div>
        )
    }
}