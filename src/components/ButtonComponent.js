import React from 'react';
import {fetchPosts} from '../actions/postAction'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


function ButtonComponent(props) {
    return (
        <button
            onClick={() => {
                props.fetchPosts()
            }}
            type="button"
            className="px-4 py-2 rounded-lg bg-cyan-600 text-white">Click me</button>
    );
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({fetchPosts: fetchPosts}, dispatch)
}

export default connect(null, matchDispatchToProps)(ButtonComponent);