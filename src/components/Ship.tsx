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
  max-width: 13rem;
`;

const ShipName = styled.p`
  text-align: center;
`;

interface ShipProps {
  name: string;
  image: string;
}

export default function Ship({ name, image }: ShipProps) {
  return (
    <Container>
      <ShipImage src={image} alt="ship" />
      <ShipName>{name}</ShipName>
    </Container>
  );
}
