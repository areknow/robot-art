import { Robot } from '@robot-art/api-interfaces';
import { memo } from 'react';
import styled from 'styled-components';

interface RobotIdentityProps {
  robot: Robot;
}

const StyledImage = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 320px;
  margin-top: 20px;
`;

export const RobotIdentity = memo(({ robot }: RobotIdentityProps) => {
  return (
    <>
      <h3>{robot.name}</h3>
      <StyledImage url={robot.imageUrl} />
    </>
  );
});
