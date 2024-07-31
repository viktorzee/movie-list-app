import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { useGetPopularMoviesQuery, useSearchMoviesQuery } from '../state-mang/services/tmdb-api';
import MovieCard from '../components/Moviecard';
import Loader from '../components/Loader';
import SearchBar from '../components/SearchInput';


const MovieList = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  const { data: popularMovies, isLoading } = useGetPopularMoviesQuery(page);
  const { data: searchResults } = useSearchMoviesQuery(query, { skip: !searchActive });

  useEffect(() => {
    if (!searchActive && popularMovies) {
      setMovies((prevMovies) => [...prevMovies, ...popularMovies.results]);
    }
  }, [popularMovies]);

  useEffect(() => {
    if (searchResults) {
      setMovies(searchResults.results);
    }
  }, [searchResults]);

  const loadMore = () => {
    if (!searchActive) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const onSearch = () => {
    setSearchActive(true);
    setPage(1);
    setMovies([]);
  };

  const resetSearch = () => {
    setQuery('');
    setSearchActive(false);
    setPage(1);
    setMovies([]);
  };

  const renderMovie = ({ item }: { item: any }) => (
    <MovieCard
      movie={item}       
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <SearchBar
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSearch={onSearch}
      />
      {searchActive && (
        <Button title="Reset Search" onPress={resetSearch} />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      )}
      {!searchActive && !isLoading && (
        <View style={{ marginTop: 20 }}>
          <Button title="Load More" onPress={loadMore} disabled={isLoading} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MovieList;
