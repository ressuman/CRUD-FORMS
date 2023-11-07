//CLASS COMPONENT
// import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { v4 as uuid } from "uuid";

// class UserForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//     };
//   }

//   handleNameChange = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   handleEmailChange = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };

//   handlePasswordChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       this.state.name.length > 0 &&
//       this.state.email.length > 0 &&
//       this.state.password.length > 0
//     ) {
//       let newUser = {
//         name: this.state.name,
//         email: this.state.email,
//         password: this.state.password,
//         id: uuid(),
//       };

//       this.props.addUser(newUser);

//       this.setState({ name: "", email: "", password: "" });
//     }
//   };

//   render() {
//     return (
//       <div className="m-5">
//         <h1 className="mb-5">User Form Component</h1>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               value={this.state.name}
//               onChange={this.handleNameChange}
//               type="text"
//               placeholder="Enter your name"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               value={this.state.email}
//               onChange={this.handleEmailChange}
//               type="email"
//               placeholder="Enter email"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               value={this.state.password}
//               onChange={this.handlePasswordChange}
//               type="password"
//               placeholder="Password"
//             />
//           </Form.Group>

//           <Button className="mx-auto" variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default UserForm;

//FUNCTIONAL COMPONENT

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length > 0 && email.length > 0 && password.length > 0) {
      let newUser = {
        name: name,
        email: email,
        password: password,
        id: uuid(),
      };

      props.addUser(newUser);

      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="m-5">
      <h1 className="mb-5">User Form Component</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className="mx-auto" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
