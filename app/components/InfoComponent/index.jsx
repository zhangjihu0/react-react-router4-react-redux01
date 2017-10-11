import React,{Component} from 'react';
import Star from '../../../components/Star/index.jsx'
export default class InfoComponent extends Component{
    render(){
        let {img,star,desc,title,subTitle,price} = this.props.data
        return(
            <div>
                <div>
                    <img src={img} alt="" />
                    <div>
                        <h3>{title}</h3>
                        <div>
                            <Star count={star} /><span>￥{price}</span>
                        </div>
                        {subTitle}
                    </div>
                </div>
                {/* 将内容转换成HTML插入到页面中 */}
                <div dangerouslySetInnerHTML={{__html:desc}}>
                </div>
            </div>
        )
    }
}