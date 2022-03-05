import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {BlogContext} from '../context/BlogsProvider';
import Icon from 'react-native-vector-icons/Feather';

const IndexScreen = ({navigation}) => {
  // console.log(props)
  const {state, deleteBlogPosts, getBlogPosts} = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();

    navigation.addListener('didFocus', () => {
      getBlogPosts();
    })
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={id => id.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('show', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                  <Icon name="trash-2" style={styles.iconStyle} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
