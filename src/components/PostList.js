import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectPost } from "../actions/postAction";

function PostList(props) {
    const { allPost, selectPost } = props;

    function createListItems() {
        return allPost.map((post) => (
            <li onClick={() => selectPost(post)} key={post.id} className="flex justify-between items-center w-[600px] gap-5 pb-3">
                <div className="flex justify-center items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <h1>{post.name}</h1>
                </div>
                <h1>{post.email}</h1>
            </li>
        ));
    }

    if (!allPost) {
        return (<h2>Click the Button first!</h2>);
    }

    return (
        <ul>
            {createListItems()}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        allPost: state.allPost
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
