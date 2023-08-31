import { FC } from 'react';
import './JokeCard.css';
import { IJoke } from '../../models';
import { Link } from 'react-router-dom';

interface JokeCardProps {
  data: IJoke;
  classType: 'normal' | 'heading';
}

const JokeCard: FC<JokeCardProps> = ({ data, classType }) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  return (
    <Link to={data.url} target="_blank" className={`jokeCard ${classType}`}>
      <p className="jokeText">{data.value}</p>
      <div className="footer">
        <p className="id">{data.id}</p>
        <p className="date">
          {new Intl.DateTimeFormat('ru-RU', dateOptions).format(new Date(data.created_at))}
        </p>
      </div>
    </Link>
  );
};

export default JokeCard;
