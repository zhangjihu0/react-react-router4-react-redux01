// 路由控制；
import React,{Component} from 'react';
//路由的；两种类型 HashRoute BrowerRoute(浏览器自带)
import { 
    HashRouter as Router,
    Route //每一条route
        } from 'react-router-dom';
import Home from '../Home/index.jsx'
export default class RouteMap extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Route path='/' component={Home} />
                    </div>
                </Router>
            </div>
        )
    }
}