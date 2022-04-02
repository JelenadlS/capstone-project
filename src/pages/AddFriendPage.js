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

export default function AddFriendPage() {
  const navigate = useNavigate();

  const [enteredName, setEnteredName] = useState('');
  const [tooLong, setTooLong] = useState(false);
  const [tooShort, setTooShort] = useState(true);

  const addedFriend = useStore(state => state.addedFriend);
  const setAddedFriend = useStore(state => state.setAddedFriend);

  const disabledButton = tooShort === true || tooLong === true;

  return (
    <>
      <Header hiddenFriend="hidden">
        Add a friend
        <ArrowBackButton onClick={() => navigate(-1)}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <Grid>
          <WrapperForm
            title="addAFriend"
            autoComplete="off"
            onSubmit={onAddFriend}
          >
            <StyledLabels htmlFor="addFriend">
              Who is your friend?
              <StyledInputs
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
                  These are quite a lot friends keep the overview and make it
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

          {addedFriend?.length > 0 && (
            <section>
              <p>Find below your already added friends:</p>
              <ul title="list of added friends">
                {addedFriend?.map(friend => {
                  return (
                    <StyledList key={friend.id}>
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

  function handleNameInput(event) {
    event.preventDefault();
    event.target.value.length <= 1 ? setTooShort(true) : setTooShort(false);
    event.target.value.length >= 50 ? setTooLong(true) : setTooLong(false);
    setEnteredName(event.target.value);
  }

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
      setAddedFriend([...addedFriend, ...arrayWithIds]);
    setEnteredName('');
    setTooShort(true);
    setTooLong(false);
  }

  function onDeleteFriend(thisNameId) {
    setAddedFriend(addedFriend.filter(friend => friend.id !== thisNameId));
  }
}

const Grid = styled.span`
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
