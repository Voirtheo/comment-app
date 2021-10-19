import React, { Component } from 'react'
import './index.css'
class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: '',
        }
    }
    componentDidMount() {
        this.textarea.focus()
    }
  
    
    render() {
        const handleUsernameChange = (event) => {
            this.setState({
                username: event.target.value
            })
        }
        const handleContentChange = (event) => {
            this.setState({
                content: event.target.value
            })
        }
        const handleSubmit = () => {
            if (this.props.onSubmit) {
                const { username, content } = this.state
                this.props.onSubmit({ 
                   username: username,
                   content: content ,
                   createdTime: +new Date()})
            }
            this.setState({ content: '' })
        }
        const _savename = (username) =>{
            localStorage.setItem('username', username)
        }
        const handleonBlur = (event) => {
            _savename(event.target.value)
        }
       
       
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onChange={handleUsernameChange}
                            onBlur={handleonBlur}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={handleContentChange}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={handleSubmit}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput