import { Robot } from '@robot-art/api-interfaces';
import { memo } from 'react';
import styled from 'styled-components';

interface RobotIdentityProps {
  /** The robot to identify. */
  robot: Robot;
}

const StyledImage = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 320px;
  margin: 20px 0;
`;

/**
 * The robot identity component is a reusable insert for various card components
 * to reduce the common styling for the image and the header presentation.
 */
export const RobotIdentity = memo(({ robot }: RobotIdentityProps) => {
  return (
    <>
      <h3>{robot.name}</h3>
      <StyledImage url={robot.imageUrl} />
    </>
  );
});
