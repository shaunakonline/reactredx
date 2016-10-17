import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import {browserHistory} from 'react-router';
import SignupForm from './SignupForm';
import toastr from 'toastr';

class SignupPage extends React.Component{
    constructor(props, context) {
      super(props, context);

      this.state = {
        user: Object.assign({}, props.user),
        errors: {},
        saving: false
      };

     this.updateSignupState = this.updateSignupState.bind(this);
     this.signupUser = this.signupUser.bind(this);
}
   updateSignupState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

    signupFormIsValid() {
      let formIsValid = true;
      let errors = {};

      if (this.state.user.username.length < 2) {
        errors.username = 'Username must be at least 2 characters.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
    }

      signupUser(event) {
        event.preventDefault();

        if (!this.signupFormIsValid()) {
          return;
        }

        this.setState({saving: true});

        this.props.actions.signupUser(this.state.user)
          .then(() => this.redirect())
          .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
          });
      }

      redirect() {
        this.setState({saving: false});
        toastr.success('User saved');
      //  this.context.router.push('/courses');
      }


  render(){
    return(<div>
      <h1>signup page</h1>
      <SignupForm
         onChange={this.updateSignupState}
         onSave={this.signupUser}
         user={this.state.user}
         errors={this.state.errors}
         saving={this.state.saving}
        />
      </div>

    );
  }
}

  SignupPage.propTypes = {
    user: PropTypes.object.isRequired,
    //authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  //Pull in the React Router context so router is available on this.context.router.
  SignupPage.contextTypes = {
    router: PropTypes.object
  };

  function mapStateToProps(state, ownProps) {

    let user = {id: '', firstname: '', lastname: '', username: '', password: '', phone: ''   };

    return {
      user: user
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(userActions, dispatch)
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
