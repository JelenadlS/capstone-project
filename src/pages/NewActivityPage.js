import { useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Picture from '../components/Picture';

import goBackIcon from '../images/goBackIcon.svg';

export default function NewActivityPage({
  onAddActivity,
  uploadImage,
  photo,
  setPhoto,
  handleResetPage,
  handleResetPageAndShowArrow,
  addedFriend,
}) {
  const navigate = useNavigate();

  function resetForm() {
    navigate(-1);
    setPhoto('');
  }

  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>
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
          photo={photo}
          setPhoto={setPhoto}
          handleResetPage={handleResetPage}
          handleResetPageAndShowArrow={handleResetPageAndShowArrow}
          addedFriend={addedFriend}
        />
      </Main>
    </Picture>
  );
}
