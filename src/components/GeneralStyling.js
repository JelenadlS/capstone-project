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

const StyledEmptyMessageFGPage = styled.section`
  display: grid;
  grid-template-rows: repeat(7, auto);
  grid-template-columns: repeat(2, auto);
  padding: 10px;
  gap: 10px;
  font-size: 14px;
  align-items: center;
`;
export { StyledEmptyMessageFGPage };

const StyledIntro = styled.p`
  grid-column: 1 / span 2;
  text-align: center;
  font-size: 16px;
`;
export { StyledIntro };

const StyledAdd = styled.div`
  display: flex;
  flex-direction: column;
`;
export { StyledAdd };

const LinkStyling = styled(Link)`
  color: rgba(71, 39, 35, 0.72);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export { LinkStyling };
