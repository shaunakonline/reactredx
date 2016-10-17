import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

 const SignupForm = ({user, onSave, onChange, saving, errors}) => {

  return (
    <form>
      <h1>SignUp Form</h1>
      <TextInput
        name="firstname"
        label="Firstname"
        value={user.firstname}
        onChange={onChange}
        error={errors.firstname}/>

        <TextInput
          name="lastname"
          label="Lastname"
          value={user.lastname}
          onChange={onChange}
          error={errors.lastname}/>

          <TextInput
            name="username"
            label="Username"
            value={user.username}
            onChange={onChange}
            error={errors.username}/>

          <TextInput
            name="phone"
            label="Phone"
            value={user.phone}
            onChange={onChange}
            error={errors.phone}/>

          <TextInput
              name="password"
              label="Password"
              value={user.password}
              onChange={onChange}
              error={errors.password}/>

          <TextInput
                  name="password"
                  label="Password Confirm"
                  value={user.password}
                  onChange={onChange}
                  error={errors.password}/>

      {/* <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/> */}


      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Sign Up'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

SignupForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SignupForm;
