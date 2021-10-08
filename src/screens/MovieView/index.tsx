import React, {useState, useEffect} from 'react';
import {Text, FlatList, View, Image} from 'react-native';
import Loading from '../../components/Loading';
import Queries from '../../../ApiServes/Queries';
import GenresList from '../../components/GenresList';
import env from '../../../environments/env.json';
import styles from './style';

const MovieView = ({route}) => {
  const [loading, setLaoding] = useState(true);
  const [loading2, setLaoding2] = useState(true);
  const [castData, setCastData] = useState([]);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    setLaoding(true);
    getMovieData();
    getCastData();
  }, []);

  let getMovieData = async () => {
    let data = await Queries().movieById(route.params.id, {});
    setMovieData(data.data);
    setLaoding(false);
  };

  let getCastData = async () => {
    let data = await Queries().credits(route.params.id, {});
    setCastData(data.data.cast);
    setLaoding2(false);
  };

  let CastItem = item => {
    return (
      <View style={{alignItems: 'center', paddingRight: 15}}>
        <Image
          style={{width: 100, height: 100, borderRadius: 100, marginBottom: 10}}
          source={{uri: env.IMAGE_BASE_URL + item.profile_path}}
        />
        <Text style={{fontWeight: 'bold'}}> {item.name.substring(0, 10)}</Text>
      </View>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.contaner}>
      <View style={{alignItems: 'center', paddingTop: 20}}>
        <Image
          style={styles.poster}
          source={{uri: env.IMAGE_BASE_URL + movieData.poster_path}}
        />
        <Text style={styles.title}>{movieData.title} </Text>
        <Text
          style={{
            paddingTop: 10,
            color: '#53ba24',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {movieData.vote_average * 10}%
        </Text>
      </View>
      <Text style={styles.sectionTitle}>Overview</Text>
      <Text style={{fontSize: 15, color: '#6a6a6a', height: 100}}>
        {movieData.overview}
      </Text>
      <Text style={{fontSize: 15, fontWeight: 'bold', paddingBottom: -5}}>
        Genres
      </Text>
      <GenresList
        style={styles.GenresList}
        genre_ids={movieData.genres.map(gen => gen.id)}
      />
      <Text style={styles.sectionTitle}>Credits</Text>
      {loading2 ? (
        <Loading />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={castData}
          keyExtractor={(item, i) => i}
          renderItem={({item}) => CastItem(item)}
        />
      )}
    </View>
  );
};

export default MovieView;
