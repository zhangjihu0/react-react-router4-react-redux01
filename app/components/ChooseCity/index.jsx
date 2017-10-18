import React,{Component} from 'react';
import './index.less'
export default class ChooseCity extends Component{
    constructor(props){
        super(props)
        this.state={
            cityArray:['北京','上海','杭州','天津','黑龙江']
        }
    }
    render(){

        return(
            <div className="city">
                <h3>选择城市</h3>
                <ul >
                    {
                        this.state.cityArray.map((item,index,array)=>{
                            return <li key={index} onClick={this.props.changeCity.bind(this,item)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}