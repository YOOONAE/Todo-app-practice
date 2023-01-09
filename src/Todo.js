import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            isCompleted: false,
            todo: ''
        }


        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleClickComplete = this.handleClickComplete.bind(this);

        // 묶어줘야 하는 이유.. 다시 한번?!

    }

    handleClickDelete(evt) {
        evt.preventDefault();
        console.log('handleClickDelete !!')
        console.log(this.props.id)
        this.props.removeTodo(this.props.id)
    }

    handleClickEdit(evt) {
        console.log('handleClickEdit !!')
        this.setState({
            isEditing: !this.state.isEditing,
            todo: this.props.todo
        })
    }

    handleSubmitEdit(evt) {
        console.log('handleSubmitEdit')
        evt.preventDefault();
        this.props.editTodo(this.state.todo, this.props.id)
        this.handleClickEdit();
    }

    handleChange(evt) {
        console.log('handleChange')
        // console.log(evt.target)
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


    handleClickComplete(evt) {
        console.log('handleClickComplete!!');
        this.setState({
            isCompleted: !this.state.isCompleted
        });
        console.log(this.state.isCompleted)
    }

    openEditBox() {
        if (this.state.isEditing) {
            return (
                <form onSubmit={this.handleSubmitEdit}>
                    <b>
                        <input
                            autoFocus
                            className='edit'
                            id='update'
                            name='todo'
                            value={this.state.todo}
                            onChange={this.handleChange}></input>
                    </b>
                </form>
            )
        } else {
            return (
                <div onClick={this.handleClickComplete}>
                    <b>{this.props.todo}</b>
                </div>
            )
        }
    }



    render() {
        return (
            <div className={this.state.isCompleted ? 'TodoLi completed' : 'TodoLi'}>
                {this.openEditBox()}
                <button onClick={this.handleClickDelete} className='TodoBtn delete'>X</button>
                <button onClick={this.handleClickEdit} className='TodoBtn edit'>Edit</button>
            </div>
        )
    }
}

export default Todo;