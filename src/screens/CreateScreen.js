import {StyleSheet, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import {BlogContext} from '../context/BlogsProvider';
import BlogForms from '../components/BlogForms';

const CreateScreen = ({navigation}) => {
  const {addBlogPosts} = useContext(BlogContext);

  return (
    <BlogForms
      onSubmit={(title, content) => {
        addBlogPosts(title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
