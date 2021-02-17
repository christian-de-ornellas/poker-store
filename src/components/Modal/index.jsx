import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Container, Content, Message, Footer } from './styles';
import Button from '../Button';
import { Creators as ModalActions } from '../../store/ducks/modal';

const Modal = () => {
  const dialog = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(ModalActions.showModal({ show: false, message: '' }));
  };

  return (
    <>
      {dialog.show === true ? (
        <Container>
          <Content>
            <Message>{dialog.message}</Message>
            <Footer>
              <Button title="Sair" onClick={() => onClose()} />
            </Footer>
          </Content>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
export default Modal;
