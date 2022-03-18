import styled from 'styled-components';

export default function Button({
  children,
  fontSize,
  margin,
  background,
  justifySelf,
  onClick,
  width,
  height,
  borderRadius,
  boxShadow,
  padding,
  position,
  bottom,
  zIndex,
}) {
  return (
    <WrapperButton
      fontSize={fontSize}
      background={background}
      margin={margin}
      justifySelf={justifySelf}
      onClick={onClick}
      width={width}
      height={height}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      padding={padding}
      position={position}
      bottom={bottom}
      zIndex={zIndex}
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
  box-shadow: ${props => props.boxShadow || 'none'};
  border-radius: ${props => props.borderRadius || '60px'};
  padding: ${props => props.padding || '10px'};
  justify-self: ${props => props.justifySelf || 'stretch'};
  width: ${props => props.width || '75px'};
  margin: ${props => props.margin || '0px'};
  height: ${props => props.height || '60px'};
  position: ${props => props.position || 'fixed'};
  bottom: ${props => props.bottom || '0'};
  z-index: ${props => props.zIndex || '0'};
`;
