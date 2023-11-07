// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//FUNCTIONAL COMPONENT

// import React, { useState } from "react";
// import UserForm from "./Components/UserForm";
// import UserList from "./Components/UserList";
// import { Container } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { v4 as uuid } from "uuid";
// // import { Container, Row, Col } from 'react-bootstrap';

// function App() {
//   const [users, setUsers] = useState([
//     {
//       name: "Abram",
//       email: "abram@email.com",
//       password: "qwertyiop",
//       id: uuid(),
//     },
//     {
//       name: "Moses",
//       email: "moses@email.com",
//       password: "poiuytrewq",
//       id: uuid(),
//     },
//     {
//       name: "Isaac",
//       email: "isaac@email.com",
//       password: "asdfghjkl;",
//       id: uuid(),
//     },
//     {
//       name: "Noah",
//       email: "noah@email.com",
//       password: ";lkjhgfdsa",
//       id: uuid(),
//     },
//     {
//       name: "Jacob",
//       email: "jacob@email.com",
//       password: "zxcvbnm,./",
//       id: uuid(),
//     },
//   ]);

//   const addNewUser = (newUser) => {
//     setUsers([...users, newUser]);
//   };

//   const editUser = (userId, newUserDetails) => {
//     let mappedArray = users.map((user) => {
//       if (user.id === userId) {
//         return newUserDetails;
//       } else {
//         return user;
//       }
//     });

//     // console.log(userId, newUserDetails);

//     setUsers(mappedArray);
//   };

//   const deleteUser = (userId) => {
//     let filteredArray = users.filter((user) => {
//       if (user.id !== userId) {
//         return user;
//       }
//     });

//     setUsers(filteredArray);

//     // console.log(userId);
//   };

//   console.log(users);
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <UserForm addUser={addNewUser} />
//         </Col>

//         <Col>
//           <UserList users={users} edit={editUser} delete={deleteUser} />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;

//CLASS COMPONENT

import React, { Component } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuid } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: "Abram",
          email: "abram@email.com",
          password: "qwertyiop",
          id: uuid(),
        },
        {
          name: "Moses",
          email: "moses@email.com",
          password: "poiuytrewq",
          id: uuid(),
        },
        {
          name: "Isaac",
          email: "isaac@email.com",
          password: "asdfghjkl;",
          id: uuid(),
        },
        {
          name: "Noah",
          email: "noah@email.com",
          password: ";lkjhgfdsa",
          id: uuid(),
        },
        {
          name: "Jacob",
          email: "jacob@email.com",
          password: "zxcvbnm,./",
          id: uuid(),
        },
      ],
    };

    // // this binding is necessary to make `this` work in the callback of the function
    // this.addNewUser = this.addNewUser.bind(this);
  }

  //below,you can do it this way (arrow function)....
  addNewUser = (newUser) => {
    this.setState({ users: [...this.state.users, newUser] });
  };

  //this way (normal function)..,but you have to first, bind it below the super
  // addNewUser(newUser) {
  //   this.setState({ users: [...this.state.users, newUser] });
  // }

  editUser = (userId, newUserDetails) => {
    let mappedArray = this.state.users.map((user) => {
      if (user.id === userId) {
        return newUserDetails;
      } else {
        return user;
      }
    });

    this.setState({ users: mappedArray });

    //console.log(userId, newUserDetails);
  };

  deleteUser = (userId) => {
    let filteredArray = this.state.users.filter((user) => {
      if (user.id !== userId) {
        return user;
      }
    });

    this.setState({ users: filteredArray });
    // console.log(userId);
  };

  render() {
    console.log(this.state.users);
    return (
      <Container>
        <Row>
          <Col>
            <UserForm addUser={this.addNewUser} />
          </Col>

          <Col>
            <UserList
              users={this.state.users}
              edit={this.editUser}
              delete={this.deleteUser}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
