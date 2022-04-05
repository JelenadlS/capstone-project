import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AddButton, ArrowBackButton, DeleteButton } from '../components/Button';
import { StyledLabels, StyledInputs } from '../components/FormStyling';
import Header from '../components/Header';
import Main from '../components/Main';

import useStore from '../hooks/useStore.js';

import deleteIcon from '../images/binIcon.svg';
import goBackIcon from '../images/goBackIcon.svg';
import saveIcon from '../images/saveIcon.svg';

export default function AddGroupPage() {
  const navigate = useNavigate();

  const [enteredGroup, setEnteredGroup] = useState('');
  const [tooLongGroup, setTooLongGroup] = useState(false);
  const [tooShortGroup, setTooShortGroup] = useState(true);

  const addedGroup = useStore(state => state.addedGroup);
  const setAddedGroup = useStore(state => state.setAddedGroup);

  const disabledButtonGroup = tooShortGroup === true || tooLongGroup === true;

  return (
    <>
      <Header hiddenGroup="hidden">
        Add a group
        <ArrowBackButton onClick={() => navigate(-1)}>
          <img width="50" height="40" src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main aria-label="add a group page">
        <Grid>
          <WrapperForm
            title="add a group"
            autoComplete="off"
            onSubmit={onAddGroup}
          >
            <StyledLabels htmlFor="addGroup">
              What is the name of your group?
              <StyledInputs
                id="addGroup"
                type="text"
                name="addGroup"
                value={enteredGroup}
                onChange={handleGroupInput}
                placeholder="Workpeps or Girlsgroup or ..."
              />
            </StyledLabels>

            <AddButton
              type="submit"
              role="button"
              disabled={disabledButtonGroup}
            >
              <img width="25" height="25" src={saveIcon} alt="save" />
            </AddButton>
            {tooLongGroup === true && (
              <StyledNotification>
                <i>This is quite a long name for a group, make it shorter</i>
              </StyledNotification>
            )}

            {tooShortGroup === true && (
              <StyledNotification>
                <i>Please enter a name with at least 2 characters</i>
              </StyledNotification>
            )}
          </WrapperForm>

          {addedGroup.length > 0 && (
            <section>
              <p>Find below your already added groups:</p>
              <ul title="list of added groups">
                {addedGroup?.map(group => {
                  return (
                    <StyledList key={group.id}>
                      <>
                        {group.enteredGroup}
                        <DeleteButton onClick={() => onDeleteGroup(group.id)}>
                          <StyledImage
                            width="18"
                            height="18"
                            src={deleteIcon}
                            alt="delete"
                          />
                        </DeleteButton>
                      </>
                    </StyledList>
                  );
                })}
              </ul>
            </section>
          )}
        </Grid>
      </Main>
    </>
  );

  function handleGroupInput(event) {
    event.preventDefault();
    event.target.value.length <= 1
      ? setTooShortGroup(true)
      : setTooShortGroup(false);
    event.target.value.length >= 25
      ? setTooLongGroup(true)
      : setTooLongGroup(false);
    setEnteredGroup(event.target.value);
  }

  function onAddGroup(event) {
    event.preventDefault();
    const id = nanoid();
    setAddedGroup([...addedGroup, { id, enteredGroup }]);
    setEnteredGroup('');
    setTooShortGroup(true);
    setTooLongGroup(false);
  }

  function onDeleteGroup(thisGroupId) {
    setAddedGroup(addedGroup.filter(group => group.id !== thisGroupId));
  }
}

const Grid = styled.section`
  height: 85vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr 1fr);
  justify-items: center;
`;
const WrapperForm = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 60px);
  justify-items: center;
  align-items: center;
  margin-top: 40px;
`;

const StyledList = styled.li`
  margin-left: 40px;
  padding: 2px;
`;

const StyledImage = styled.img`
  padding-top: 2px;
  margin-left: 20px;
`;

const StyledNotification = styled.p`
  font-size: 12px;
  color: rgba(210, 129, 53, 1);
  margin-bottom: 20px;
`;
