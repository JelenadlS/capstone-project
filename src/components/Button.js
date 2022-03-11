import styled from 'styled-components';

export default function Button({
  children,
  font_size,
  padding,
  background,
  justify_self,
}) {
  return (
    <WrapperButton
      font_size={font_size}
      padding={padding}
      background={background}
      justify_self={justify_self}
    >
      {children}
    </WrapperButton>
  );
}

const WrapperButton = styled.button`
  background: ${props => props.background || '#92dec5'};
  color: rgba(71, 39, 35, 0.72);
  font-size: ${props => props.font_size || '18px'};
  border: none;
  border-radius: 15px;
  padding: ${props => props.padding || '10px'};
  justify-self: ${props => props.justify_self || 'none'};
`;
