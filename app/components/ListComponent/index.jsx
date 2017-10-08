import React,{Component} from 'react';
import ListItem from './ListItem/index.jsx'
export default class ListComponent extends Component{
    render(){
        console.log('ListComponent',this.props.data)
        return(
            <div>
                {
                    this.props.data.map((item,index,array)=>{
                        return <ListItem key={index} data = {item} />
                    })
                }
            </div>
        )
    }
}