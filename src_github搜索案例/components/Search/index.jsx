import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    searchUsers = ()=>{
        //获取用户号输入
        //发送网络请求
        const {value} = this.keyWordElement
        this.props.updateAppState({isFirst:false,isLoading:true})
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
            response => {
                this.props.updateAppState({isLoading:false, users:response.data.items})
            },
            error =>{
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c =>this.keyWordElement = c} type="text" placeholder="输入用户名" />&nbsp;
                    <button onClick={this.searchUsers}>搜索</button>
                </div>
            </section>
        )
    }
}
