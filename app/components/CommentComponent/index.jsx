import React,{Component} from 'react';
import CommentItem from './CommentItemComponent/index.jsx';
export default class CommentComponent extends Component{
    render(){
        return(
            <div className="view-main">
                {
                    this.props.data.map((item,index,array)=>{
                        return <CommentItem data={item} key={index} />
                    })
                }
            </div>
        )
    }
}