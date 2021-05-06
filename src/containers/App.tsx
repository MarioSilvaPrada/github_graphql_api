import { FC } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { USERS_QUERY } from '../GraphQL/queries';

// Components
import Header from '../components/Header';
import Table from '../components/Table';

const App: FC = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  console.log(loading, error, data);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error {error.message}</h1>;

  return (
    <div>
      <Header user={data.viewer} />
    </div>
  );
};

export default App;
