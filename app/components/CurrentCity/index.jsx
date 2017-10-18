import React,{Component} from 'react';
import './index.less';
export default class CurrentCity extends Component{
    render(){
        let cityName = this.props.cityName;
        return(
            <div className="current-city">
                <div>{cityName}</div>
                {cityName}
                <hr />
            </div>
        )
    }
}