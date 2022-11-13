import styled from 'styled-components';

const Container = styled.div`
  color: white;
  display: grid;
  place-content: center;
  border: 1px solid hsl(199 38% 30%);
  border-radius: 5%;
  aspect-ratio: 1/1;
`;

const ShipImage = styled.img`
  aspect-ratio: 1/1;
  height: 8rem;
`;

export default function Ship() {
  return (
    <Container>
      <ShipImage src="" alt="ship" />
      <p>ship name</p>
    </Container>
  );
}
