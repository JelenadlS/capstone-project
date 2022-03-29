import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AddButton, ArrowBackButton, DeleteButton } from '../components/Button';
import DeleteModal from '../components/DeleteModal.js';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import deleteIcon from '../images/binIcon.svg';
import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';
import saveIcon from '../images/saveIcon.svg';

export default function AddFriendPage({
  addedFriend,
  setAddedFriend,
  onAddedFriend,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    const id = nanoid();
    onAddedFriend({ id: id, newFriend: enteredName });
    setEnteredName('');
  }

  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>
        Add a friend
        <ArrowBackButton onClick={() => navigate(-1)}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <Grid>
          <WrapperForm autoComplete="off">
            <StyledLabels htmlFor="friend">
              Who is your friend?
              <StyledInputs
                id="friend"
                type="text"
                name="friend"
                value={enteredName}
                onChange={handleNameInput}
                placeholder="Lasse, Andrea, Michael,..."
              />
            </StyledLabels>
            <AddButton type="submit" role="button" onClick={onSubmit}>
              <img width="25" height="25" src={saveIcon} alt="save" />
            </AddButton>
          </WrapperForm>
          <section>
            <p>Find below your already added friends:</p>
            <StyledList role="list" title="list of added friends">
              {addedFriend.map(friend => {
                return (
                  <li key={friend.id}>
                    {friend.newFriend}
                    <DeleteButton onClick={() => setShow(true)}>
                      <StyledImage
                        width="18"
                        height="18"
                        src={deleteIcon}
                        alt="delete"
                      />
                    </DeleteButton>
                    <DeleteModal
                      onDelete={() => onDeleteActivity(friend.id)}
                      onClose={() => setShow(false)}
                      show={show}
                    />
                  </li>
                );
              })}
            </StyledList>
          </section>
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
    console.log(event.target.value);
    const lowerCase = event.target.value.toLowerCase();
    setEnteredName(lowerCase);
  }

  function onDeleteActivity(thisFriendId) {
    setAddedFriend(addedFriend.filter(friend => friend.id !== thisFriendId));
    setShow(false);
  }
}

const Grid = styled.span`
  height: 85vh;
  margin-top: 20px;
  display: grid;
  grid-template-rows: 180px 1fr 50px;
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

const StyledInputs = styled.input`
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
  padding: 1px;
  width: 100%;
  color: rgba(71, 39, 35, 0.72);
  outline: none;
`;

const StyledList = styled.ul`
  color: rgba(71, 39, 35, 0.72);

  li {
    margin-left: 40px;
    padding: 5px;
  }
`;

const StyledImage = styled.img`
  padding-top: 3px;
  margin-left: 20px;
`;
