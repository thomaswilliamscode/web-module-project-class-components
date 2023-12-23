import React from 'react'

export default class Form extends React.Component {
	constructor(props) {
		super(props);
	}

  // bottom button toggle display 


	
	render() {
    let {name} = this.props.ToDos.newTask[0]
		let {buttonInfo} = this.props
    // console.log(buttonInfo)
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
				</form>
				<button onClick={this.props.onClickToggle}>{buttonInfo()}</button>
			</div>
		);
	}
}
