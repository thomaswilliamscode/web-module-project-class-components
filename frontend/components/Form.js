import React from 'react'

export default class Form extends React.Component {
	constructor(props) {
		super(props);
	}

  // bottom button toggle display 

	
	render() {
    let {name} = this.props.ToDos.newTask[0]
		// console.log(name)
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<input
						onChange={this.props.onChange}
						value={name}
						placeholder='Type ToDo'
					></input>
					<button>Submit</button>
					<br></br>
					<button>{}</button>
				</form>
			</div>
		);
	}
}
