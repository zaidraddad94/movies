import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Loading from '../../components/Loading';
import styles from './style';
import Queries from '../../../ApiServes/Queries';
import ListHeaderComponent from '../../components/ListHeaderComponent';
import CustomButton from '../../components/CustomButton';
import {Button} from 'native-base';
import AppListItem from '../../components/ListItem';

const Movies = ({navigation}) => {
  const [loading, setLaoding] = useState(true);
  const [category, setCategory] = useState('upcoming');
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setLaoding(true);
    getMoviesList(false);
  }, [category]);

  let getMoviesList = async (more: boolean) => {
    let data = await Queries()[category]({page: page});
    setTotalResults(data.data.total_results);
    if (more) {
      setMoviesList(() => [...moviesList, ...data.data.results]);
      setLaoding(false);
      setPage(page + 1);
    } else {
      setMoviesList(data.data.results);
      setLaoding(false);
      setPage(page + 1);
    }
  };

  return (
    <View>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Movies</Text>
        </View>
        <Button.Group
          style={{paddingTop: 20, paddingBottom: 7}}
          mx={{
            base: 'auto',
            md: 0,
          }}>
          <CustomButton
            active={category == 'upcoming'}
            onPress={() => setCategory('upcoming')}
            text={'Upcoming'}
          />
          <CustomButton
            active={category == 'popular'}
            onPress={() => setCategory('popular')}
            text={'Popular'}
          />
          <CustomButton
            active={category == 'top_rated'}
            onPress={() => setCategory('top_rated')}
            text={'Top Rated'}
          />
        </Button.Group>
      </View>
      {loading ? (
        <View style={{marginTop: 300}}>
          <Loading />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={moviesList}
          keyExtractor={(item, i) => i}
          onEndReached={() => getMoviesList(true)}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() =>
            ListHeaderComponent(totalResults, moviesList.length)
          }
          renderItem={({item}) => AppListItem(item, navigation)}
        />
      )}
    </View>
  );
};

export default Movies;
