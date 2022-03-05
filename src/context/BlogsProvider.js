import contextHelper from './contextHelper';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'get_blogPost':
      return action.payload;
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({type: 'get_blogPost', payload: response.data});
  };
};

const addBlogPosts = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title, content});
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPosts = dispatch => {
  return id => {
    dispatch({type: 'delete_blogPost', payload: id});
  };
};

const editBlogPosts = dispatch => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit_blogPost', payload: {id, title, content}});
    if (callback) {
      callback();
    }
  };
};
export const {BlogContext, Provider} = contextHelper(
  blogReducer,
  {addBlogPosts, deleteBlogPosts, editBlogPosts, getBlogPosts},
  [],
);
