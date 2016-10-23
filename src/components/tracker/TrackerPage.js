import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import TrackerForm from './TrackerForm';


class TrackerPage extends React.Component{
render(){
  return(
    <div>
    <h1>Tracker page</h1>

   <TrackerForm />
   </div>
  );
}

}
TrackerPage.propTypes ={

};
export default TrackerPage;
