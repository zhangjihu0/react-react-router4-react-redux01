import React,{Component} from 'react';
import './index.less';
export default class CurrentCity extends Component{
    render(){
        let cityName = this.props.cityName;
        console.log("cityName",cityName);
        return(
            <div className="current-city">
                <div>{cityName}</div>
                {
                    ((name)=>{
                      console.log('name',name);
                       
                    })(cityName)
                }
                {cityName}
                <hr />
            </div>
        )
    }
}