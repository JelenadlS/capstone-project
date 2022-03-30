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
  addedFriend,
  setAddedFriend,
  addedGroup,
  setAddedGroup,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState('');
  const [enteredGroup, setEnteredGroup] = useState('');
  const [tooLong, setTooLong] = useState(false);
  const [tooShort, setTooShort] = useState(true);
  const [tooLongGroup, setTooLongGroup] = useState(false);
  const [tooShortGroup, setTooShortGroup] = useState(true);

  function onAddFriend(event) {
    event.preventDefault();

    const separatedFriends = enteredName
      .split(',')
      .map(function (name) {
        return name.trim();
      })
      .filter(name => {
        return name !== '';
      });

    const arrayWithIds = separatedFriends.map(friend => {
      const id = nanoid();
      return { id: id.toString(), newFriend: friend };
    });

    separatedFriends.length > 0 &&
      setAddedFriend(friends => [...friends, ...arrayWithIds]);
    setEnteredName('');
    setTooShort(true);
    setTooLong(false);
  }

  function onAddGroup(event) {
    event.preventDefault();
    const id = nanoid();
    console.log(enteredGroup);
    setAddedGroup([...addedGroup, { id, enteredGroup }]);
    setEnteredGroup('');
    setTooShort(true);
    setTooLong(false);
  }

  const disabledButton = tooShort === true || tooLong === true;
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

          <WrapperForm
            title="addAFriend"
            autoComplete="off"
            onSubmit={onAddFriend}
          >
            <StyledLabels htmlFor="addFriend">
              Who is your friend?
              <StyledInput
                id="addFriend"
                type="text"
                name="addFriend"
                value={enteredName}
                onChange={handleNameInput}
                placeholder="Lasse, Andrea, Michael,..."
              />
            </StyledLabels>

            <AddButton type="submit" role="button" disabled={disabledButton}>
              <img width="25" height="25" src={saveIcon} alt="save" />
            </AddButton>
            {tooLong === true && (
              <StyledNotification>
                <i>
                  This are quite a lot friends keep the overview and make it
                  shorter
                </i>
              </StyledNotification>
            )}

            {tooShort === true && (
              <StyledNotification>
                <i>Please enter a name with at least 2 characters</i>
              </StyledNotification>
            )}
          </WrapperForm>

          {addedFriend.length > 0 && (
            <section>
              <p>Find below your already added friends:</p>
              <StyledList role="list" title="list of added friends">
                {addedFriend?.map(friend => {
                  return (
                    <li key={friend.id}>
                      <div>
                        {friend.newFriend}
                        <DeleteButton onClick={() => onDeleteFriend(friend.id)}>
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

  function handleNameInput(event) {
    event.preventDefault();
    event.target.value.length <= 1 ? setTooShort(true) : setTooShort(false);
    event.target.value.length >= 25 ? setTooLong(true) : setTooLong(false);
    setEnteredName(event.target.value);
  }

  function onDeleteFriend(thisNameId) {
    setAddedFriend(addedFriend.filter(friend => friend.id !== thisNameId));
  }

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
