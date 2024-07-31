import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie, RootStackParamList } from '../model';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'

interface MovieCardProps {  
  movie: Movie;
}

const imageUri = process.env.EXPO_PUBLIC_POSTER_URI;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'MovieList'>>();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('MovieDetail', { movie })}
    >
      <Image
        source={{ uri: `${imageUri}${movie.poster_path}` }}
        style={styles.posterImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text>{movie.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  posterImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MovieCard;
