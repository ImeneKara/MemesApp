import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUsername } from '../redux/profile';

const Profile = (props) => {
  const [value, setValue] = useState(props.username);
  return (
    
      <div className="container card">
      <form className="m-5">
      <div className="form-group">
        <label htmlFor="username">Name:</label>
        <input type="text" className="form-control" id="username"
               value={value}
               onChange={e => setValue(e.target.value)}/>
      </div>
      <button type="button" className="btn btn-primary"
              onClick={() => props.setUsername(value)}>Save</button>
      </form>
      </div>
    
  )
};

const mapStateToProps = state => ({
  username: state.profile.username
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setUsername
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Profile);