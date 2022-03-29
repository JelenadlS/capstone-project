import { useNavigate, useParams } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Picture from '../components/Picture';

import goBackIcon from '../images/goBackIcon.svg';

export default function EditActivityPage({
  activities,
  onEditActivity,
  uploadImage,
  photo,
  setPhoto,
  handleResetPage,
  handleResetPageAndShowArrow,
  addedFriend,
  addedGroup,
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const activityToEdit = activities.find(activity => activity.id === id);

  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>
        Edit activity
        <ArrowBackButton onClick={resetForm}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <Form
          preloadedValues={activityToEdit}
          handleActivity={onEditActivity}
          uploadImage={uploadImage}
          photo={photo}
          setPhoto={setPhoto}
          handleResetPage={handleResetPage}
          handleResetPageAndShowArrow={handleResetPageAndShowArrow}
          addedFriend={addedFriend}
          addedGroup={addedGroup}
        />
      </Main>
    </Picture>
  );

  function resetForm() {
    navigate(`/${activityToEdit.friend}/${activityToEdit.activity}`);
    setPhoto('');
  }
}
