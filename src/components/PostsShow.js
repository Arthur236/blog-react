import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from "../actions/index";

class PostsShow extends Component {
    componentDidMount() {
        // Fetch the id in the url
        const { id } = this.props.match.params;

        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return(<div>Loading...</div>);
        }

        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/" className="btn btn-primary">Back To Posts</Link>
                </div>

                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>

                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    // Return only a particular post from the big list of posts
    return { post: state.posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
