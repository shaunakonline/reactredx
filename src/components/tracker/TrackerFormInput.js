import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const TrackerFormInput = ({tracker, onNext, onChange, errors}) => {


     return(
<div>
  <p> This is Tracker Form Input </p>

   <TextInput
     name="applicationName"
     label="Application Name"
     value={tracker.applicationName}
     onChange={onChange}
     error={errors.applicationName}
     />

     <TextInput
       name="developerName"
       label="Developer Name"
       value={tracker.developerName}
       onChange={onChange}
       error={errors.developerName}
       />
       <TextInput
         name="testerName"
         label="Tester Name"
         value={tracker.testerName}
         onChange={onChange}
         error={errors.testerName}
         />

        
           <input type ="submit"
                 value="Next >"
                 className="btn btn-primary"
                 onClick={onNext}      />

</div>

     );

 };
 TrackerFormInput.propTypes = {
   tracker: React.PropTypes.object.isRequired,
   onNext: React.PropTypes.func.isRequired,
   onChange: React.PropTypes.func.isRequired,
   errors: React.PropTypes.object
 };
export default TrackerFormInput;
