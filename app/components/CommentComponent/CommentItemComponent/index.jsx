import React,{Component} from 'react';
import Star from '../../star/index.jsx';
export default class CommentItem extends Component{
    render(){
        let {userName,star,comment}  = this.props.data;
        return(
            <div className="main">
              <p className="user">
                  <i>头像</i>
                  <span>{userName}</span>
              </p>
              <Star amount={star} />
              <p>{comment}</p>
            </div>
        )
    }
}