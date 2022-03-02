import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, useContext} from 'react';
import {BlogContext} from '../context/BlogsProvider';

const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPosts} = useContext(BlogContext);
  return (
    <View>
      <Text style={styles.titleStyle}>Title</Text>
      <TextInput
        style={styles.contentStyle}
        value={title}
        onChangeText={title => setTitle(title)}
      />
      <Text style={styles.titleStyle}>Content</Text>
      <TextInput
        style={styles.contentStyle}
        value={content}
        onChangeText={content => setContent(content)}
      />
      <Button
        title="Create Post"
        onPress={() =>
          addBlogPosts(title, content, () => {
            navigation.navigate('index');
          })
        }
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 35,
    margin: 10,
  },
  contentStyle: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
    fontSize: 30,
  },
});
