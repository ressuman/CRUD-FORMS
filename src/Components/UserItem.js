//FUNCTIONAL COMPONENT
// import React, { useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";

// function UserItem(props) {
//   // console.log(props);
//   // console.log(props.users.length);
//   //details:{name:"",email:"",password:""}

//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState(props.details.name);
//   const [email, setEmail] = useState(props.details.email);
//   const [password, setPassword] = useState(props.details.password);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   //either you write your functions for the show and hide separately like below....
//   const show = () => {
//     setShowModal(true);
//   };

//   const hide = () => {
//     setShowModal(false);
//   };

//   //or you combine the two functions together as shown below
//   // const handleModalState = () => {
//   //   // (!)false -> true
//   //   // (!)true -> false
//   //   setShowModal(!showModal);
//   // };
//   //please note that if you use the above function(two functions combined) you replace the onClick={show} and onHide={hide} with onClick={handleModalState} and onHide={handleModalState} respectively

//   const handleEdit = () => {
//     let newDetails = {
//       name: name,
//       email: email,
//       password: password,
//     };

//     let mergedDetails = { ...props.details, ...newDetails };
//     console.log(props.details);
//     console.log(newDetails);

//     props.editButton(props.details.id, mergedDetails);

//     hide();
//   };

//   return (
//     <div>
//       <h1>{props.details.name}</h1>
//       <h2>{props.details.email}</h2>
//       <h3>{props.details.password}</h3>
//       {/* <h4>{props.details.id}</h4> */}

//       <Button className="mx-3" variant="info" onClick={show}>
//         Edit
//       </Button>
//       <Button
//         className="mx-3"
//         variant="danger"
//         onClick={() => {
//           props.deleteButton(props.details.id);
//         }}
//       >
//         Delete
//       </Button>

//       <Modal show={showModal} onHide={hide}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 value={name}
//                 onChange={handleNameChange}
//                 type="text"
//                 placeholder="Enter your name"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 value={email}
//                 onChange={handleEmailChange}
//                 type="email"
//                 placeholder="Enter email"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 value={password}
//                 onChange={handlePasswordChange}
//                 type="password"
//                 placeholder="Password"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={hide}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleEdit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default UserItem;

//CLASS COMPONENT

import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      name: this.props.details.name,
      email: this.props.details.email,
      password: this.props.details.password,
    };
  }

  //you do it this way or......
  handleModalState = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  //this way....
  // show = () => {
  //   this.setState({ showModal: true });
  // };

  // hide = () => {
  //   this.setState({ showModal: false });
  // };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleEdit = () => {
    let newDetails = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    let mergedDetails = { ...this.props.details, ...newDetails };
    console.log(this.props.details);
    console.log(newDetails);

    this.props.editButton(this.props.details.id, mergedDetails);

    this.handleModalState();
  };

  render() {
    // console.log(this.props);
    // console.log(this.props.users.length);
    //details:{name:"",email:"",password:""}
    return (
      <div>
        <h1>{this.props.details.name}</h1>
        <h2>{this.props.details.email}</h2>
        <h3>{this.props.details.password}</h3>
        {/* <h4>{this.props.details.id}</h4> */}

        <Button className="mx-3" variant="info" onClick={this.handleModalState}>
          Edit
        </Button>
        <Button
          className="mx-3"
          variant="danger"
          onClick={() => {
            this.props.deleteButton(this.props.details.id);
          }}
        >
          Delete
        </Button>

        <Modal show={this.state.showModal} onHide={this.handleModalState}>
          <Modal.Header closeButton>
            <Modal.Title>Form-CRUD-React</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModalState}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UserItem;
