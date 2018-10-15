import React, {Component} from 'react';

import {Button, Table} from 'semantic-ui-react'

// The Todo Row component is a simple stateless component, It simply takes the this.props 
// and maps the specific events to the methods of parent component 
class TodoRow extends Component
{
    
    getClassName(props) {
            return `
        
        ${props.todo.updating
            ? "updating"
            : ""}
        ${props.todo.status === 'done'
                ? "done"
                : ""}
        ${props.todo.deleting
                    ? "deleting"
                    : ""}
        `
    }
    render(){
        return (
        // getClass Name assigns the class names of this element 

        <Table.Row className={this.getClassName(this.props)}>
            <Table.Cell>{this.props.todo.title}</Table.Cell>
            <Table.Cell>{this.props.todo.description}</Table.Cell>
            <Table.Cell>{this.props.todo.date}</Table.Cell>
            <Table.Cell className="options">
                {this.props.todo.status !== 'done' && <Button className="option-buttons" color='green' onClick={this.props.completeTodo}>
                    <i className="fa fa-check"></i>
                </Button>}
                <Button className="option-buttons" color='blue' onClick={this.props.startEditing}>
                    <i className="fa fa-pencil"></i>
                </Button>
                <Button className="option-buttons" color='red' onClick={this.props.deleteTodo}>
                    <i className="fa fa-trash"></i>
                </Button>
            </Table.Cell>
        </Table.Row>
    )
}
}

// Right now Updating, done and deleting these three states are represented with different Class Name


export default TodoRow;