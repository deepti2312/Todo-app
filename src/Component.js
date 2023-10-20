import './App.css';
import React from "react";
import { connect } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./Action";
import store from './store';

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            title: ''
        }
        this.toggleButton = true

    }

    handle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.props.state.todo.some(item => item.id === this.state.id)) {
            if (this.state.title !== '') {
                store.dispatch(addTodo({ title: this.state.title }))
            } else {
                alert("please enter something.")
            }
        } else {
            store.dispatch(editTodo(this.state.id, this.state.title))
        }
        this.setState({
            title: ""
        })
        this.toggleButton = (true)

    }

    handleDelete = (id) => {
        store.dispatch(deleteTodo(id))
    }

    showData = (item) => {
        this.setState({
            id: item.id,
            title: item.title
        })
        this.toggleButton = (false)

    }

    render() {
        let { all_todos } = this.props;
        return (
            <>
                <h5>ToDo App</h5>
                <form className='Form'>
                    <lable className="Lable"> <b>Title:</b> <input type="text" value={this.state.title} onChange={(e) => this.handle(e)} /> </lable>
                    {
                        this.toggleButton ?
                            <button className="Button" type="submit" onClick={this.handleSubmit}> Add </button> :
                            <button className="Button" onClick={this.handleSubmit}> Save </button>

                    }

                </form>
             
                <ul className="Ul">
                    {all_todos.map((item) => <li key={item.id}>
                        <span> {item.title} </span>
                        <button className="Button" onClick={() => this.handleDelete(item.id)}> Delete </button>
                        <button className="Button" onClick={() => this.showData(item)}> Edit </button>
                    </li>)}

                </ul>

            </>
        )
    }
}
function mapStateToProp(state) {
    return {
        all_todos: state.todo,
        state: state
    }

}
const mapDispatchToProp = {
    addTodo,
    editTodo,
    deleteTodo
}

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
