import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		const { postId } = this.props.params;

		const i = this.props.posts.findIndex((post) => post.code === postId);
		const post = this.props.posts[i];

		const postComments = this.props.comments[postId] || [];

		return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments
          postComments={postComments}
          params={this.props.params}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}/>
      </div>
		)
	}
};

export default Single;
