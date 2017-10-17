import React,{Component} from 'react';
export default class ChooseCity extends Component{
    render(){
        return(
            <div className="city">
                <h3>选择城市</h3>
                <ul >
                    <li>北京</li>
                    <li>上海</li>
                    <li>杭州</li>
                    <li>天津</li>
                    <li>黑龙江</li>
                </ul>
            </div>
        )
    }
}