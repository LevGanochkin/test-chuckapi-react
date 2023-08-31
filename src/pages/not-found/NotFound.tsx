import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container notFound">
      <h1>{404}</h1>
      <p>Sorry, page not found</p>
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  );
};

export default NotFound;
