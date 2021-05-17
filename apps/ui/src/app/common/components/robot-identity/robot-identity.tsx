import { Robot } from '@robot-art/api-interfaces';
import styled from 'styled-components';

interface RobotIdentityProps {
  robot: Robot;
}

const StyledRobotIdentity = styled.div`
  img {
    margin-top: 20px;
    width: 100%;
    margin: auto;
  }
`;

export const RobotIdentity = ({ robot }: RobotIdentityProps) => {
  return (
    <StyledRobotIdentity>
      <h3>{robot.name}</h3>
      <img alt={robot.name} src={robot.imageUrl} />
    </StyledRobotIdentity>
  );
};
