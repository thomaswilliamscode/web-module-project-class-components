import React, {Component} from 'react'

import TodoList from './TodoList'
import Form from './Form'

  // [
	// 	{
	// 		name: 'Organize Garage',
	// 		id: 1528817077286, // could look different, you could use a timestamp to generate it
	// 		completed: false,
	// 	},
	// 	{
	// 		name: 'Bake Cookies',
	// 		id: 1528817084358,
	// 		completed: false,
	// 	},
	// ];


  const initialState = [
    { name: '', id: 0, completed: false}
  ]
  

export default class App extends Component {
	constructor() {
		super();
		this.state = { initialTasks: initialState, newTask: initialState };
	}

  createNew = (value) => {
    return ({name: value, id: Date.now(), completed: false})
  }

	onSubmit = (e) => {
		e.preventDefault();
    let { value } = e.target[0]
    let newInfo = this.createNew(value)
		this.setState((prevState) => ({
			initialTasks: [...prevState.initialTasks, newInfo],
			newTask: initialState
		}));

    console.log(this.state)
    
	}

	onChange = (e) => {
		let { value } = e.target;
		this.setState((prevState) => ({
			initialTasks: [
				...prevState.initialTasks
			], newTask: [
        
        { name: value, id: 0, completed: false }
      ]
		}));
		// change info obj

		// on submit add copy of info obj
		// to end of array,
		// and set info obj back to initial
	};

	ToDoMap = () => {
		let { initialTasks } = this.state;
    // console.log(initialTasks)
		return (
			<>
				{initialTasks.map((obj) => {
					let { name, id, completed } = obj;
					return <h2 key={id}>{name}</h2>;
				})}
			</>
		);
	}

	render() {
		//console.log(this.state);
		return (
			<div>
				<TodoList map={this.ToDoMap} ToDos={this.state.initialTasks} />
				<Form
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					ToDos={this.state}
				/>
			</div>
		);
	}
}
