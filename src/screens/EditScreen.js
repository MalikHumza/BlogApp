import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {BlogContext} from '../context/BlogsProvider';
import BlogForms from '../components/BlogForms';

const EditScreen = ({navigation, route: {params}}) => {
  const id = params.id;

  const {state, editBlogPosts} = useContext(BlogContext);
  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <View>
      <BlogForms
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
          editBlogPosts(id, title, content, () => {
            navigation.navigate('index');
          });
        }}
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
