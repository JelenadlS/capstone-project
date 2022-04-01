import { useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';

import useStore from '../hooks/useStore.js';

import goBackIcon from '../images/goBackIcon.svg';

export default function NewActivityPage({ onAddActivity, uploadImage }) {
  const navigate = useNavigate();

  const setPhoto = useStore(state => state.setPhoto);

  return (
    <>
      <Header hiddenGroup="hidden">
        new activity
        <ArrowBackButton onClick={resetForm}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <Form
          preloadedValues={null}
          handleActivity={onAddActivity}
          uploadImage={uploadImage}
        />
      </Main>
      <Navigation hidden="hidden"></Navigation>
    </>
  );

  function resetForm() {
    navigate(-1);
    setPhoto('');
  }
}
