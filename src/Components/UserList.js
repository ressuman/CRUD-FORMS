//FUNCTIONAL COMPONENT
import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  console.log(props.users);
  console.log(props.edit);
  console.log(props.delete);
  console.log(props);

  return (
    <div>
      <h1>User List Component</h1>

      {props.users.map((user) => {
        console.log(user);
        return (
          <UserItem
            key={user.id}
            details={user}
            editButton={props.edit}
            deleteButton={props.delete}
          />
        );
      })}
    </div>
  );
};

export default UserList;

//CLASS COMPONENT

// import React, { Component } from "react";
// import UserItem from "./UserItem";

// class UserList extends Component {
//   render() {
//     console.log(this.props.users);
//     console.log(this.props.edit);
//     console.log(this.props.delete);
//     console.log(this.props);

//     return (
//       <div>
//         <h1>User List Component</h1>

//         {this.props.users.map((user) => {
//           console.log(user);
//           return (
//             <UserItem
//               key={user.id}
//               details={user}
//               editButton={this.props.edit}
//               deleteButton={this.props.delete}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default UserList;
