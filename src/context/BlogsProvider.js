import contextHelper from './contextHelper';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPosts = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogPost', payload: {title, content}});
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
  {addBlogPosts, deleteBlogPosts, editBlogPosts},
  [{id: 1, title: 'New Post', content: 'New Content'}],
);
