import React, { Component } from 'react';

import {Header,Form,List} from './components/index.js'


import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDPcTh7ngilESVZhu3nvvxmmdBZrugwgqE",
  authDomain: "reactify-e2c05.firebaseapp.com",
  databaseURL: "https://reactify-e2c05.firebaseio.com",
  projectId: "reactify-e2c05",
  storageBucket: "reactify-e2c05.appspot.com"
};

firebase.initializeApp(config)
const rootRef = firebase.database().ref().child('bugs')

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChangeAssigned = this.handleChangeAssigned.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangeSeverity = this.handleChangeSeverity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {bugs:[],assigned:'', desc:'', severity:''};
  }


  handleChangeAssigned(e) {

  this.setState({assigned: e.target.value});
  }

  handleChangeDesc(e) {

  this.setState({desc: e.target.value});
  }

  handleChangeSeverity(e,{value}) {

  this.setState({severity: value});
  }

  addBug(new_bug){
    this.setState({bugs:[...this.state.bugs,new_bug]})
    rootRef.push(new_bug)
    return this.state.bugs
  }

  handleSubmit(e) {
    e.preventDefault();

    var new_bug = {
      assigned:this.state.assigned,
      desc:this.state.desc,
      severity:this.state.severity,
      status:'Open'
    };

    this.addBug(new_bug)

    this.setState({
      assigned:'',
      desc:'',
      severity:''
    })
  }

  handleEdit(e){

    var bugRef= rootRef.child(e.target.id)

    bugRef.on("value", function(bug) {

      rootRef.child(e.target.id).set({
        assigned: bug.val().assigned,
        desc: bug.val().desc,
        severity: bug.val().severity,
        status: 'Close'
      });
    });
  }

  handleDelete(e){
    rootRef.child(e.target.id).remove();
  }

  fillState(data){
    this.setState({
      bugs: data
    })
  }

  componentDidMount(){
    let self = this
    rootRef.on('value',list_bug => {
      self.fillState(list_bug.val())
    });
  }

  render() {
    return (
      <div style={{marginLeft:300,marginRight:300}}>
        <Header />
        <Form handleSubmit={this.handleSubmit} handleChangeAssigned={this.handleChangeAssigned} handleChangeDesc={this.handleChangeDesc} handleChangeSeverity={this.handleChangeSeverity}
        desc={this.state.desc} assigned={this.state.assigned} severity={this.state.severity} />
        <hr />
        <List bugs={this.state.bugs} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default App;
