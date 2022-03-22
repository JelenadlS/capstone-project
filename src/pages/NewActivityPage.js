import { useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Picture from '../components/Picture';

import goBackIcon from '../images/goBackIcon.svg';

export default function NewActivityPage({
  onAddActivity,
  setImage,
  uploadImage,
  photo,
}) {
  const navigate = useNavigate();
  return (
    <Picture>
      <Header>
        new activity
        <ArrowBackButton onClick={() => navigate(-1)}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <Form
          preloadedValues={null}
          handleActivity={onAddActivity}
          setImage={setImage}
          uploadImage={uploadImage}
          photo={photo}
        />
      </Main>
    </Picture>
  );
}
