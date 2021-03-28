import React, { FC, useCallback, useState } from 'react';
import Main from '../../components/Main/Main';
import Login from '../../components/Main/Login';

const MainContainer: FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setModal(true);
  }, []);

  const access_token = localStorage.getItem('access-token');

  return (
    <>
      {access_token ? (
        <Main />
      ) : (
        <Login
          modal={modal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
      )}
    </>
  );
};

export default MainContainer;
