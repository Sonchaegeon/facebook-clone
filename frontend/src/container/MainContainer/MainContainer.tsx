import React, { FC, useCallback, useState } from 'react';
import Main from '../../components/Main/Main';

const MainContainer: FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setModal(true);
  }, []);

  return (
    <Main
      modal={modal}
      handleCloseModal={handleCloseModal}
      handleOpenModal={handleOpenModal}
    />
  );
};

export default MainContainer;
