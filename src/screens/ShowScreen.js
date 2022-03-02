import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {BlogContext} from '../context/BlogsProvider';

const ShowScreen = ({route: {params}}) => {
  const {state} = useContext(BlogContext);
  const blogPost = state.find(post => post.id === params.id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
