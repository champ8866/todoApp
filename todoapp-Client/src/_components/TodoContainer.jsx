import React, { Component } from 'react';
import { todoActions } from '../_actions/todo.actions'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import TodoTable from './TodoTable';


export class TodoContainer extends Component {

    //Create
    createTodo = (todo) => {
        todo.userid=this.props.user._id;
        this.props.dispatch(todoActions.CreateTodo(todo));
    }


    // No methods for reading, the first loading of data is done in App.js where the
    // getTodo Action is dispatched

    //Update
    startEditing = (id) => {
        this.props.dispatch(todoActions.StartEditing(id));
    }
    cancelEditing = (id) => {
        this.props.dispatch(todoActions.CancelEditing(id));
    }
    editTodo = (todo) => {
        this.props.dispatch(todoActions.UpdateTodo(todo));
    }
    completeTodo = (todo) => {
        this.props.dispatch(todoActions.UpdateTodo({...todo, status: 'done'}));
    }

    //Delete
    deleteTodo = (todo) => {
        this.props.dispatch(todoActions.DeleteTodo(todo));
    }

    render() {
        return (
            <div className="todo-container">
                <TodoTable
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editTodo={this.editTodo}
                    completeTodo = {this.completeTodo}
                    deleteTodo = {this.deleteTodo}
                />
            </div>
        );
    }
}

// Define the property types of this Container Component

TodoContainer.propTypes = {
    todos: PropTypes.array.isRequired
}

// This maps the state to the property of the component

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    }
}

// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.

export default connect(mapStateToProps)(TodoContainer);