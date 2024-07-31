import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { Movie, RootStackParamList } from '../model';

type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;
type MovieDetailScreenNavigationProp = NavigationProp<RootStackParamList, 'MovieDetail'>;

interface MovieDetailProps {
  route: MovieDetailScreenRouteProp;
  navigation: MovieDetailScreenNavigationProp;
}

const imageUri = process.env.EXPO_PUBLIC_POSTER_URI;

const MovieDetail: React.FC<MovieDetailProps> = ({ route }) => {
 
  const { movie } = route.params;
  
  const movieDetail = movie as unknown as Movie;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `${imageUri}${movieDetail.poster_path}` }}
        style={styles.posterImage}
      />
      <Text style={styles.title}>{movieDetail.title}</Text>
      <Text style={styles.releaseDate}>{movieDetail.release_date}</Text>
      <Text style={styles.overview}>{movieDetail.overview}</Text>
    </ScrollView>
  );};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  posterImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 18,
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
  },
});

export default MovieDetail;
