import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;

  li {
    padding: 5px;
  }
`;
export { StyledList };

const StyledEmptyMessage = styled.p`
  padding: 10px;
  text-align: center;
`;
export { StyledEmptyMessage };

const StyledArrow = styled.span`
  margin-left: 5px;
`;
export { StyledArrow };

const LinkStyling = styled(Link)`
  color: rgba(71, 39, 35, 0.72);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export { LinkStyling };
