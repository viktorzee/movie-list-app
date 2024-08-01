import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  MovieList: undefined;
  MovieDetail: { movie: Movie }; 
};

export type MovieDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MovieDetail'>;
export type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;


export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  // Add other fields as needed
}