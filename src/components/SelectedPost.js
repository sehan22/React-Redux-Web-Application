import React from 'react';
import {connect} from "react-redux";

function SelectedPost(props) {
    if (!props.selectedPost) {
        return (<h2>Click the post first!</h2>)
    }

    return (
        <div className="flex flex-col justify-center items-start gap-3 w-[600px]">
            <h1 className="font-bold text-3xl">Selected Item Details: </h1>
            <h1>User ID: {props.selectedPost.id}</h1>
            <h1>User Name: {props.selectedPost.name}</h1>
            <h1>User Email: {props.selectedPost.email}</h1>
            <h1>User Post: {props.selectedPost.body}</h1>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        selectedPost: state.selectedPost
    }
}

export default connect(mapStateToProps)(SelectedPost);