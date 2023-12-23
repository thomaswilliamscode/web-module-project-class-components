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
    { name: '', id: 0, completed: false, hidden: false}
  ]
  

export default class App extends Component {
	constructor() {
		super();
		this.state = { initialTasks: initialState, newTask: initialState, hide: false };
	}

  createNew = (value) => {
    return ({name: value, id: Date.now(), completed: false, hidden: false})
  }

	onSubmit = (e) => {
    // console.log(e.target)
		e.preventDefault();
    let { value } = e.target[0]
    let newInfo = this.createNew(value)
		this.setState((prevState) => ({
			initialTasks: [...prevState.initialTasks, newInfo],
			newTask: initialState
		}));

    // console.log(this.state)
    
	}

	onChange = (e) => {
		let { value } = e.target;
		this.setState((prevState) => ({
			initialTasks: [
				...prevState.initialTasks
			], newTask: [
        
        { name: value, id: 0, completed: false, hidden: false }
      ]
		}));
		// change info obj

		// on submit add copy of info obj
		// to end of array,
		// and set info obj back to initial
	};

  onClick = (e) => {
    let { value } = e.target.dataset
    this.setState( (prevState) => {
      return {
        initialTasks: prevState.initialTasks.map( (task) => {
          if (task.name === value ) {
            return {...task, completed: !task.completed}
          }
          return task
        })
      }
    })
    
  }

  onClickToggle = () => {
    let { hide } = this.state
    //  console.log(hide)
    this.setState((prevState) => ({
			...prevState,
			hide: !prevState.hide, 
			}), () => {
       let {hide} = this.state
        // console.log(hide);

				this.setState((prevState) => ({
					...prevState,
					initialTasks: prevState.initialTasks.map((task) => {
						let { hidden, completed } = task;
						// console.log(' ');
						// console.log('in the map');
						// console.log(`hidden is: ${hidden}`);
						// console.log(`completed is: ${completed}`);
						// console.log(`hide is: ${hide}`);
						if (hide && completed) {
							// console.log('we should change');
              // console.log(`hidden is: ${hidden}`)
							return { ...task, hidden: true };
						} else {
							// console.log('we not changing');
              // console.log(`hidden is: ${hidden}`);
							return { ...task, hidden: false };
						}
					}),
				}));
      })

      
			
		}

  onDisplay = () => {
    let { completed } = this.state.initialTasks
    let { hide } = this.state;
    // console.log(completed)



    // only do this for completed 
    
    // if (hide === false) {
    //   console.log('display');
    //   return 'block'
    // } else {
    //   console.log('display2');
    //   return 'none'
    // }
  }

  buttonInfo = () => {
    let {hide} = this.state
    let info = false 
    if (hide === !false) {
      info = 'Show'
    } else {
      info = 'Hide'
    }
    return (`${info} Completed`)
    
  }

	ToDoMap = () => {
		let { initialTasks } = this.state;
    let {hide} = this.state
    // console.log(initialTasks)
    let filtered = initialTasks.filter( (task) => {
      let {hidden} = task
      // console.log(' ')
      // console.log('In Filtered')
      // console.log(task)
      // console.log(`This is hidden: ${hidden}`)
      // console.log(`This is hide: ${hide}`);
      // console.log(task)
      if ( (hidden === false) ) {
        return task
      } if ( (hide === true) && (hidden == true) ) {
        return
      }
    })
		return (
			<>
				{filtered.map((obj) => {
					let { name, id, completed, hidden } = obj;
					return <h2 onClick={this.onClick} data-value={name} key={id}>{name}{completed && ' ✅'}</h2>;
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
          buttonInfo={this.buttonInfo}
          onClickToggle={this.onClickToggle}
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					ToDos={this.state}
				/>
			</div>
		);
	}
}
