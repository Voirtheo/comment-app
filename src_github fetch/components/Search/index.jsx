import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    searchUsers = async () => {
        //获取用户号输入
        //发送网络请求
        const { value } = this.keyWordElement
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('search', { isFirst: false, isLoading: true })
        // axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
        //     response => {
        //         // this.props.updateAppState({isLoading:false, users:response.data.items})
        //         PubSub.publish('search',{isLoading:false, users:response.data.items})
        //     },
        //     error =>{
        //         // this.props.updateAppState({isLoading:false,err:error.message})
        //         PubSub.publish('search',{isLoading:false,err:error.message})
        //     }
        // )
        
        //使用fetch发送请求
        //     fetch(`/api1/search/users2?q=${value}`).then(
        //         response => {
        //             console.log('成功联系服务器')
        //             return response.json()
        //         },
        //         // error => { console.log('联系服务器失败', error) }
        //     ).then(
        //         response => {
        //             console.log('成功获取数据', response)
        //             return new Promise()
        //         },
        //         // error => { console.log('获取数据失败') }
        //     ).catch(
        //         (error)=>{console.log('请求出错',error)}
        //     )
        // }
        try {
            const response = await fetch(`/api1/search/users2?q=${value}`)
            const data = await response.json()
            PubSub.publish('search',{isLoading:false, users:data.items})
            console.log(data)
        } catch (error) {
            console.log('请求出错', error)
            PubSub.publish('search',{isLoading:false,err:error.message})
        }
        
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入用户名" />&nbsp;
                    <button onClick={this.searchUsers}>搜索</button>
                </div>
            </section>
        )
    }
}
