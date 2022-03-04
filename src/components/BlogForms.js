import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const BlogForms = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
      <Button title="Save Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogForms.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

export default BlogForms;

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
