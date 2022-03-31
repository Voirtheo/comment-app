import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state = {
        users:[], //初始化状态，users初始状态为数组
        isFirst:true, //是否为第一次打开页面
        isLoading:false,  //标识是否处于加载中
        err:'' //存储请求相关的错误信息
      } 

    componentDidMount(){
        PubSub.subscribe('search',(_,data)=>{
            // console.log(data)
            this.setState(data)
        })
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用github用户搜索，输入内容点击搜索框获取信息</h2> :
                    isLoading ? <h2 style={{color:'red'}}>Loading...</h2>:
                    err ? <h2>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div className="card" key={userObj.id}>
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img alt='User does not exist' src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
