import styled from 'styled-components';
import { router } from '../routes/router';

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

interface Launch {
  id: string;
  missionName: string;
  rocketName: string;
  image?: string;
}

interface LaunchPreviewProps {
  launch: Launch;
}

export default function LaunchPreview({ launch }: LaunchPreviewProps) {
  const { id, missionName, rocketName, image } = launch;

  return (
    <router.Link search={{ id }} to="/launch">
      <Container>
        {image && <Image src={image} alt={missionName} />}
        <Text>Mission: {missionName}</Text>
        <Text>Rocket: {rocketName}</Text>
      </Container>
    </router.Link>
  );
}
