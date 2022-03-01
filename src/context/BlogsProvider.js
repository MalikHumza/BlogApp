import contextHelper from './contextHelper';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPosts = dispatch => {
  return () => {
    dispatch({type: 'add_blogPost'});
  };
};

const deleteBlogPosts = dispatch => {
  return id => {
    dispatch({type: 'delete_blogPost', payload: id});
  };
};

export const {BlogContext, Provider} = contextHelper(
  blogReducer,
  {addBlogPosts, deleteBlogPosts},
  [],
);
