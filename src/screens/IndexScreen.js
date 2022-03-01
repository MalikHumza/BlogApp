import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {BlogContext} from '../context/BlogsProvider';
import Icon from 'react-native-vector-icons/Feather';

const IndexScreen = () => {
  const {state, addBlogPosts, deleteBlogPosts} = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Posts" onPress={() => addBlogPosts()} />
      <FlatList
        data={state}
        keyExtractor={Posts => Posts.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                <Icon name="trash-2" style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    paddingHorizontal: 6,
    paddingVertical: 6,
    // marginTop: 6
  },
  title: {
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 26,
  },
});
