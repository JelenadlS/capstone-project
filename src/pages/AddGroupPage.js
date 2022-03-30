import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AddButton, ArrowBackButton, DeleteButton } from '../components/Button';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import deleteIcon from '../images/binIcon.svg';
import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';
import saveIcon from '../images/saveIcon.svg';

export default function AddGroupPage({
  addedGroup,
  setAddedGroup,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  const navigate = useNavigate();

  const [enteredGroup, setEnteredGroup] = useState('');
  const [tooLongGroup, setTooLongGroup] = useState(false);
  const [tooShortGroup, setTooShortGroup] = useState(true);

  function onAddGroup(event) {
    event.preventDefault();
    const id = nanoid();
    setAddedGroup([...addedGroup, { id, enteredGroup }]);
    setEnteredGroup('');
    setTooShortGroup(true);
    setTooLongGroup(false);
  }

  const disabledButtonGroup = tooShortGroup === true || tooLongGroup === true;

  return (
    <Picture>
      <Header hiddenGroup="hidden">
        Add a group
        <ArrowBackButton onClick={() => navigate(-1)}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <Grid>
          <WrapperForm
            title="addAGroup"
            autoComplete="off"
            onSubmit={onAddGroup}
          >
            <StyledLabels htmlFor="addGroup">
              What is the name of your group?
              <StyledInput
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
              <StyledList role="list" title="list of added groups">
                {addedGroup?.map(group => {
                  return (
                    <li key={group.id}>
                      <div>
                        {group.enteredGroup}
                        <DeleteButton onClick={() => onDeleteGroup(group.id)}>
                          <StyledImage
                            width="18"
                            height="18"
                            src={deleteIcon}
                            alt="delete"
                          />
                        </DeleteButton>
                      </div>
                    </li>
                  );
                })}
              </StyledList>
            </section>
          )}
        </Grid>
      </Main>
      <Navigation
        handleResetPage={handleResetPage}
        handleResetPageAndShowArrow={handleResetPageAndShowArrow}
      >
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
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

  function onDeleteGroup(thisGroupId) {
    setAddedGroup(addedGroup.filter(group => group.id !== thisGroupId));
  }
}

const Grid = styled.span`
  height: 85vh;
  margin-top: 20px;
  display: grid;
  grid-template-rows: repeat(2, 1fr 1fr);
  justify-items: center;
`;
const WrapperForm = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 60px);
  justify-items: center;
  align-items: center;
  margin-top: 30px;
`;

const StyledLabels = styled.label`
  padding: 0 30px;
`;

const StyledInput = styled.input`
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  color: rgba(71, 39, 35, 0.72);
  outline: none;
`;

const StyledList = styled.ul`
  color: rgba(71, 39, 35, 0.72);

  li {
    margin-left: 40px;
    padding: 2px;
  }
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
