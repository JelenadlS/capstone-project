import styled from 'styled-components';

export default function Button({
  children,
  fontSize,
  margin,
  background,
  justifySelf,
  onClick,
  width,
}) {
  return (
    <WrapperButton
      fontSize={fontSize}
      background={background}
      margin={margin}
      justifySelf={justifySelf}
      onClick={onClick}
      width={width}
    >
      {children}
    </WrapperButton>
  );
}

const WrapperButton = styled.button`
  background: ${props => props.background || '#92dec5'};
  color: rgba(71, 39, 35, 0.72);
  font-size: ${props => props.fontSize || '18px'};
  border: none;
  border-radius: 15px;
  padding: 10px;
  justify-self: ${props => props.justifySelf || 'stretch'};
  width: ${props => props.width || ''};
  margin: ${props => props.margin || '0px'};
`;
