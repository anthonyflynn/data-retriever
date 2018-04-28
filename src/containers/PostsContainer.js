import React from 'react'
import { connect } from 'react-redux'
import Posts from '../components/Posts'
import { fetchData } from '../actions/actionCreators'

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    const { error, loading, posts } = this.props;
    if (loading) {
      return <h1>Loading</h1>;
    }
    if (error) {
      return <h1>Error: {error.message}</h1>;
    }

    return (
          <ul>
            {posts.map(post =>
              <li key={post.id}>
                <Posts name={post.body} />
              </li>
            )}
          </ul>
        );
  }

}

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(PostsContainer);
