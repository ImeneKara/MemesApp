import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMemesRequest } from '../redux/memes';
import Meme from '../components/meme';

const Memes = (props) => {
  useEffect(() => {
    props.getMemesRequest();
  },[]);
  
  return (
    <div className="row">
      {
        props.memes.map(
          meme => (
          <Meme image={meme.image} title={meme.title} author={meme.author} />
          )
        )
      }
    </div>
  )
};

const mapStateToProps = state => ({
  memes: state.memes.memes
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMemesRequest
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Memes);