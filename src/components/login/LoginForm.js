import React from 'react';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';

const LoginForm = ({user, onSave, onChange, saving, errors } ) => {
  return(
    <form>
    <p>login form </p>
    <TextInput
      name="username"
      label="Username"
      value={user.username}
      onChange={onChange}
      error={errors.username}/>

    <PasswordInput
      name="password"
      label="Password"
      value={user.password}
      onChange={onChange}
      error={errors.password}/>

    <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onClick={onSave}/>
  </form>

  );
};

LoginForm.propTypes ={
user: React.PropTypes.object.isRequired,
onSave: React.PropTypes.func.isRequired,
onChange: React.PropTypes.func.isRequired,
saving: React.PropTypes.bool,
errors: React.PropTypes.object

};

export default LoginForm;
