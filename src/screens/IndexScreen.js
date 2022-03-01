import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useContext} from 'react';
import BlogContext from '../context/BlogsProvider';

const IndexScreen = () => {
  const {data, addBlogPosts} = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Posts" onPress={() =>addBlogPosts()} />
      <FlatList
        data={data}
        keyExtractor={(Posts) => Posts.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
