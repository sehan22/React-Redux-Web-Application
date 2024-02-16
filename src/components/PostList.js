import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectPost} from "../actions/postAction";


class PostList extends Component {


    createListItems() {
        return this.props.allPost.map((post) => {
            console.log(this.props.allPost)
            return (
                <li onClick={() => this.props.selectPost(post)}
                    key={post.id}
                    className="flex justify-between items-center w-[600px] gap-5 pb-3">
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <h1>{post.name}</h1>
                    </div>
                    <h1>{post.email}</h1>
                </li>
            )
        })
    }

    render() {
        if (!this.props.allPost) {
            return (<h2>Click the Button first!</h2>)
        }
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        allPost: state.allPost
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectPost: selectPost}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostList);