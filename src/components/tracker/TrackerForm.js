import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrackerFormInput from './TrackerFormInput';


class TrackerForm extends React.Component{
  constructor(props,context){
    super(props,context)
    this.state={
      tracker:Object.assign({},{"applicationName":'',"developerName":'',"testerName":''}),
      errors:{}
    }
    this.onFormInputNext = this.onFormInputNext.bind(this);
    this.updateTrackerState = this.updateTrackerState.bind(this);
  }
updateTrackerState (e){
  const field = e.target.name;
  let tracker = this.state.tracker;
  tracker[field]=e.target.value;
  console.log("pk field"+field+"value "+e.target.value);
  return this.setState({tracker:tracker});
}
  trackerInputFormIsValid(){
    let formIsValid=true;
    let errors={};
    if(this.state.tracker.applicationName.length<5){
      errors.applicationName="Application name length has to be greater than 5"
      formIsValid=false;
    }
this.setState({errors:errors});
return formIsValid;
  }
  onFormInputNext(e){
    e.preventDefault();

    if(!this.trackerInputFormIsValid()){
      return;
    }
  }
   render(){
     return(
       <div>
      <p> Tracker Main Form</p>

<TrackerFormInput
tracker={this.state.tracker}
errors={this.state.errors}
onChange={this.updateTrackerState}
onNext = {this.onFormInputNext}/>
      </div>
     );
   }
}
 //
 // TrackerForm.propTypes = {};

 export default TrackerForm;
