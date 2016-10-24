import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import LoginForm from './LoginForm';

class LoginPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      user: Object.assign({}, {'username': '', 'password': ''}),
      errors: {},
      saving: false
    };

    this.updateLoginState = this.updateLoginState.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  updateLoginState (event){
    const field = event.target.name;
    let user = this.state.user;
    user[field]= event.target.value;
    return this.setState({user: user});
  }

  loginFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.user.username.length < 2) {
      errors.username = 'Username must be at least 2 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  onLoginClick(event) {
    event.preventDefault();

    if (!this.loginFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    if(this.state.user.username == "Test" && this.state.user.password == "Test"){
      this.redirect();
    }else {
      toastr.error('Invalid Username and Password');
      this.setState({saving: false});
    }
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Authenticated !');
    //this.context.router.push('/courses');
  }

  render(){
    return(
      <div>
        <h1>Login Page</h1>
        <LoginForm
        user={this.state.user}
        errors={this.state.errors}
        onChange={this.updateLoginState}
        onSave = {this.onLoginClick}
        saving={this.state.saving}
        />

      </div>
    );
  }
}

LoginPage.propTypes ={

};

export default LoginPage;
