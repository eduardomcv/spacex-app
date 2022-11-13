import styled from 'styled-components';

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(218 61% 20%);
  border-radius: 5%;
  aspect-ratio: 1/1;

  :hover {
    background-color: hsl(218 61% 20%);
  }
`;

const Image = styled.img`
  max-width: 13rem;
  max-height: 12rem;
`;

const Text = styled.p`
  text-align: center;
  margin: 1rem 0 0 0;
`;

interface LaunchPreviewProps {
  missionName: string;
  rocketName: string;
  image?: string;
}

export default function LaunchPreview({
  missionName,
  rocketName,
  image = '',
}: LaunchPreviewProps) {
  return (
    <Container>
      {image && <Image src={image} alt={missionName} />}
      <Text>Mission: {missionName}</Text>
      <Text>Rocket: {rocketName}</Text>
    </Container>
  );
}
