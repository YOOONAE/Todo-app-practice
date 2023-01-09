import React, { Component } from 'react';
import './NewTodoForm.css'


class NewTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = { todo: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        // console.log('keyboard cliked');
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        // console.log('submitted');
        this.props.addTodo(this.state.todo)
        this.setState({ todo: '' });
    }


    render() {


        return (

            <form onSubmit={this.handleSubmit} className='NewTodoForm'>
                <input
                    id='todo'
                    name='todo'
                    value={this.state.todo}
                    onChange={this.handleChange}
                    placeholder='Input your Todo'
                ></input>
                

            </form>

        )
    }
}

export default NewTodoForm;