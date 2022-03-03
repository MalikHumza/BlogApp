import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {BlogContext} from '../context/BlogsProvider';
import Icon from 'react-native-vector-icons/Feather';
import IconPencil from 'react-native-vector-icons/Foundation';

const ShowScreen = ({route: {params}}) => {
  // console.log(options)
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
