import React,{Component} from 'react';
import Star from '../Star/index.jsx';
import './index.less';
export default class InfoComponent extends Component{
    render(){
        let {img,star,desc,title,subTitle,price} = this.props.data
        return(
            <div className="main">
                <div className="content">
                    <img className="Info_img" src={img} alt="" />
                    <div className="description">
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
                <div className="handle">
                    <button>收藏</button>
                    <button>购买</button>
                </div>
            </div>
        )
    }
}