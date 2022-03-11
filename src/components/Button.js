import styled from 'styled-components';

export default function Button({
  children,
  fontSize,
  padding,
  background,
  justifySelf,
  onClick,
}) {
  return (
    <WrapperButton
      fontSize={fontSize}
      padding={padding}
      background={background}
      justifySelf={justifySelf}
      onClick={onClick}
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
  padding: ${props => props.padding || '10px'};
  justify-self: ${props => props.justifySelf || 'stretch'};
`;
