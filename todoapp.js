import React, {Component} from 'react';
import TodoItem from './todoitem.js';

class Todos extends Component {


  render(){
  	return this.props.todos.map((todo) => (
           <TodoItem key={todo.id} todo = {todo} markcompleted = {this.props.markcompleted}
           delTodo = {this.props.delTodo}/>
  	));
  }
}

export default Todos;
