import React, {Component} from 'react';
import {connect} from "react-redux";

class SelectedPost extends Component {
    render() {
        if (!this.props.selectedPost) {
            return (<h2>Click the post first!</h2>)
        }

        return (
            <div className="flex flex-col justify-center items-start gap-3 w-[600px]">
                <h1 className="font-bold text-3xl">Selected Item Details: </h1>
                <h1>User ID: {this.props.selectedPost.id}</h1>
                <h1>User Name: {this.props.selectedPost.name}</h1>
                <h1>User Email: {this.props.selectedPost.email}</h1>
                <h1>User Post: {this.props.selectedPost.body}</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedPost: state.selectedPost
    }
}

export default connect(mapStateToProps)(SelectedPost);