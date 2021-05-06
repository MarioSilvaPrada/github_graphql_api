import { FC } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { USERS_QUERY, TOP_REPOS } from '../GraphQL/queries';

// Components
import Header from '../components/Header';
import Table from '../components/Table';
import Spinner from '../components/Spinner';

const App: FC = () => {
  const { loading: userLoading, error: userError, data: userData } = useQuery(
    USERS_QUERY
  );
  const { loading, error, data } = useQuery(TOP_REPOS);

  console.log(loading, error, data);

  if (userLoading) return <h1>Loading</h1>;
  if (userError) return <h1>Error {userError.message}</h1>;

  return (
    <>
      <Header user={userData.viewer} />
      {loading ? <Spinner /> : <Table data={data.search} error={!!error} />}
    </>
  );
};

export default App;
