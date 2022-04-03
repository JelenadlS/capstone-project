import { useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';

import useStore from '../hooks/useStore.js';

import goBackIcon from '../images/goBackIcon.svg';

export default function NewActivityPage({ onAddActivity, uploadImage }) {
  const navigate = useNavigate();

  const setPhoto = useStore(state => state.setPhoto);
  const setShowSave = useStore(state => state.setShowSave);

  return (
    <>
      <Header hiddenGroup="hidden">
        new activity
        <ArrowBackButton type="button" aria-label="go back" onClick={resetForm}>
          <img width="50" height="40" src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main aria-label="add a new activity page">
        <Form handleActivity={onAddActivity} uploadImage={uploadImage} />
      </Main>
    </>
  );

  function resetForm() {
    navigate(-1);
    setPhoto('');
    setShowSave(false);
  }
}
