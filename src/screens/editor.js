import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {postMemeRequest} from '../redux/editor';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min';
import 'dropify/dist/css/dropify.min.css';

const Editor = (props) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        $('.dropify').dropify(
          {
            messages: {
                'default': 'Drag and drop your Meme here or click'
            }
        }
        );
    }, []);

    return (
        <form className="container">
            <div className="card">
                <div class="form-group row mx-5 mt-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            id="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="form-group mx-5">
                    <input
                        type="file"
                        name="image"
                        className="dropify"
                        data-allowed-file-extensions="jpg jpeg png gif"
                        onChange={e => setImage(e.target.files[0])}/>
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!title || !image}
                    onClick={() => props.postMeme(title, image)}>Publish</button>
            </div>
        </form>
    )
};

const mapDispatchToProps = dispatch => bindActionCreators({
    postMeme: postMemeRequest
}, dispatch);

export default connect(null, mapDispatchToProps)(Editor);