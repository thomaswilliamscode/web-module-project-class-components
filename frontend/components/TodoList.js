import React from 'react'


export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  

  /*// ToDoMap () {
  //   let { ToDos } = this.props;
  //   return (
  //     <>
  //       {ToDos.map((obj) => {
  //         let { name, id, completed } = obj;
  //         return (
  //           <h2 key={id}>{name}</h2>
  //         )
  //       })}
  //     </>
  //   )
  // }
  */
  
  render() {
    // let {ToDos} = this.props
    let { map } = this.props
    return (
      <>
        {map()}
      </>
    )
  }
}
