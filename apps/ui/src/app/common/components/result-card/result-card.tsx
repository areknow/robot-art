import styled from 'styled-components';

interface ResultCardProps {
  name: string;
  image: string;
}

const StyledResultCard = styled.div`
  background: #ffffff;
  border: 1px solid #d8dadb;
  box-sizing: border-box;
  box-shadow: 0px 9px 15px -9px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 40px 24px 24px 24px;
  h3 {
    text-align: center;
  }
  img {
    margin-top: 20px;
    width: 100%;
  }
`;

export const ResultCard = ({ name, image }: ResultCardProps) => {
  return (
    <StyledResultCard>
      <h3>{name}</h3>
      <img alt={name} src={image} />
    </StyledResultCard>
  );
};
