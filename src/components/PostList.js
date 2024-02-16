import React, {Component} from 'react';
import {connect} from "react-redux";


class PostList extends Component {


    createListItems() {
        return this.props.allPost.map((post) => {
            console.log(this.props.allPost)
            return (
                <li key={post.id} className="flex justify-between items-center w-700px] gap-5 pb-3">
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

export default connect(mapStateToProps)(PostList);