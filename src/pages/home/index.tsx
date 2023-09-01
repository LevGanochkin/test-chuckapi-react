import { FC, useEffect } from 'react';
import SearchField from '../../components/searchfield';
import '../pagelayout.css';
import JokeCard from '../../components/joke-card';
import { useDebounce } from '../../hooks/debounce';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { useSearchJokesQuery } from '../../store/chuckapi/chuckapi.api';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const { setSearch } = useActions();
  const { search } = useAppSelector((state) => state.search);
  const debounced = useDebounce(search);
  const { data } = useSearchJokesQuery(debounced, {
    skip: debounced.length < 3,
  });
  useEffect(() => {
    console.log(search, data);
  }, [debounced]);

  return (
    <div className="container">
      <SearchField count={data ? data.length : null} search={search} searchFunc={setSearch} />
      <div className="jokes">
        {data ? (
          data.map((item, index) =>
            index > 1 ? (
              <JokeCard key={item.id} data={item} classType={'normal'} />
            ) : (
              <JokeCard key={item.id} data={item} classType={'heading'} />
            ),
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HomePage;
