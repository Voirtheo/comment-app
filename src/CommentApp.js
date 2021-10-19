import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'


class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    handleSubmitComment(comment) {
        console.log(comment)
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({
            comments: comments
        })
        this._saveComment(comments)
    }
    _saveComment(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }
    _loadComment() {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }
    componentDidMount(){
        this._loadComment()
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)}
                />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}


export default CommentApp