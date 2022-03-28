import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AddButton, ArrowBackButton } from '../components/Button';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';
import saveIcon from '../images/saveIcon.svg';

export default function AddFriendPage({
  addedFriend,
  onAddedFriend,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  const navigate = useNavigate();

  const { register, handleSubmit, setFocus } = useForm({});

  const onSubmit = data => {
    const id = nanoid();
    onAddedFriend({ id: id, newFriend: data.newFriend });
    navigate('/addedfriend');
  };

  useEffect(() => {
    setFocus('newFriend');
  }, [setFocus]);

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
          <WrapperForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <StyledLabels htmlFor="friend">
              Who is your friend?
              <StyledInputs
                id="friend"
                type="text"
                name="friend"
                placeholder="Lasse, Andrea, Michael,..."
                {...register('newFriend', {
                  maxLength: {
                    value: 10,
                    message:
                      'I can not believe that someone has such a long name',
                  },
                })}
              />
            </StyledLabels>
            <AddButton type="submit" role="button">
              <img width="25" height="25" src={saveIcon} alt="save" />
            </AddButton>
          </WrapperForm>
          <section>
            <p>Here are your already added friends:</p>
            <StyledList role="list" title="list of added friends">
              {addedFriend.map(friend => {
                return <li key={friend.id}>{friend.newFriend}</li>;
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
}

const Grid = styled.span`
  height: 85vh;
  margin-top: 20px;
  display: grid;
  grid-template-rows: 180px 1fr 50px;
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
    padding: 5px;
  }
`;
