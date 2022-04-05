import { Link } from 'react-router-dom';

import styled from 'styled-components';

const WrapperForm = styled.form`
  display: grid;
  grid-template-rows: repeat(7, auto) 80px;
  margin-top: 20px;

  textarea {
    background: transparent;
    border: 1px solid rgba(71, 39, 35, 0.42);
    border-radius: 5px;
    padding: 5px;
    height: 90px;
    width: 100%;
    color: rgba(71, 39, 35, 0.72);
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: none;
    margin: 5px 0 8px;
  }
`;

export { WrapperForm };

const StyledSelection = styled.section`
  margin: 0 30px 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export { StyledSelection };

const StyledSelectionBox = styled.select`
  color: rgba(71, 39, 35, 0.72);
  font-size: 14px;
  padding: 3px;
  width: 50%;
  margin-left: 15px;
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
`;
export { StyledSelectionBox };

const StyledSelectionFriend = styled.section`
  margin: 5px 30px 20px;
  display: grid;
  grid-template-rows: repeat(2, auto) 25px;
  gap: 5px;
`;
export { StyledSelectionFriend };

const StyledButtonArea = styled.span`
  grid-row-start: 2;
  margin-left: 8px;
`;
export { StyledButtonArea };

const StyledButtonChoice = styled.button`
  margin: 3px;
  width: fit-content;
  background: ${props => (props.active ? '#92dec5' : 'transparent')};
  color: ${props => (props.active ? 'rgba(71, 39, 35, 0.72)' : '#92dec5')};
  border: 1px solid #92dec5;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 14px;
  white-space: nowrap;
`;
export { StyledButtonChoice };

const StyledFriendSelection = styled.section`
  grid-row-start: 3;
`;
export { StyledFriendSelection };

const StyledGroupSelection = styled.span`
  grid-row-start: 3;
  grid-template-columns: repeat(2, auto);
`;
export { StyledGroupSelection };

const StyledLabels = styled.label`
  padding: 0 30px;
`;
export { StyledLabels };

const StyledInputs = styled.input`
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
  padding: 5px;
  margin: 5px 0 8px;
  width: 100%;
  color: rgba(71, 39, 35, 0.72);
  outline: none;
`;
export { StyledInputs };

const StyledFriendLink = styled(Link)`
  img {
    margin-left: 20px;
  }
`;
export { StyledFriendLink };

const StyledDate = styled(StyledInputs)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 30px;
`;
export { StyledDate };

const StyledPictureUpload = styled.section`
  margin: 0 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`;
export { StyledPictureUpload };

const PositionedSection = styled.section`
  position: relative;
`;
export { PositionedSection };

const StyledPreviewText = styled.section`
  height: 60px;
  width: 60px;
  padding-top: 18px;
  padding-left: 4px;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 20, 0.15);
  border-radius: 50px;
  font-size: 14px;
`;
export { StyledPreviewText };

const StyledImage = styled.img`
  box-shadow: 0px 0px 20px rgba(0, 0, 20, 0.15);
  border-radius: 50px;
`;
export { StyledImage };

const ErrorMessage = styled.p`
  font-size: 12px;
  color: rgba(210, 129, 53, 1);
`;
export { ErrorMessage };
