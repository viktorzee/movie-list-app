import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, onSearch }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for movies"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
