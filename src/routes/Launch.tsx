import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import styled from 'styled-components';
import config from '../config';
import { graphql } from '../gql';

const MainContainer = styled.main`
  color: white;
  margin: auto;
  max-width: 700px;
  margin-top: 2rem;
  min-height: 70vh;
  display: grid;
  place-content: center;
  gap: 1rem;
  grid-template-areas:
    'image details'
    'name details';
`;

const Cell = styled.div`
  border: 1px solid hsl(218 61% 30%);
  border-radius: 2%;
  padding: 1rem;
  display: grid;
  place-content: start center;
`;

const ImageCell = styled(Cell)`
  grid-area: image;
  place-content: center;
  height: 15rem;
  width: 15rem;
`;

const Text = styled.span`
  text-align: center;
`;

const Image = styled.img`
  max-width: 15rem;
  max-height: 15rem;
`;

const LAUNCH_QUERY = graphql(/* GraphQL */ `
  query Launch_Query($launchId: ID!) {
    launch(id: $launchId) {
      details
      mission_name
      launch_date_utc
      launch_success
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`);

export default function Launch() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  if (!id) {
    return (
      <MainContainer>
        <Text>Invalid launch id!</Text>
      </MainContainer>
    );
  }

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['launch', id],
    queryFn: () => request(config.apiUrl, LAUNCH_QUERY, { launchId: id }),
  });

  if (isLoading) {
    return (
      <MainContainer>
        <Text>Loading...</Text>
      </MainContainer>
    );
  }

  if (!isSuccess) {
    return (
      <MainContainer>
        <Text>Something went wrong!</Text>
      </MainContainer>
    );
  }

  const { launch } = data;

  if (!launch) {
    return (
      <MainContainer>
        <Text>Invalid launch!</Text>
      </MainContainer>
    );
  }

  const {
    links,
    mission_name: missionName,
    details,
    launch_date_utc: launchDate,
    launch_success: launchSuccess,
    rocket,
  } = launch;

  const { rocket_name: rocketName, rocket_type: rocketType } = rocket || {};

  const imageSrc = links?.flickr_images?.[0];

  return (
    <MainContainer>
      <ImageCell>
        {imageSrc ? (
          <Image alt={missionName ?? ''} src={imageSrc} />
        ) : (
          <p>Image unavailable.</p>
        )}
      </ImageCell>
      <Cell style={{ gridArea: 'details' }}>
        <h2>Mission details</h2>
        <p>{details || 'Details unavailable.'}</p>
      </Cell>
      <Cell>
        <p>
          <b>Mission name:</b>
          &nbsp;
          {missionName || 'Name unavailable.'}
        </p>
        <p>
          <b>Successful?:</b>
          &nbsp;
          {launchSuccess ? '✅' : '❌'}
        </p>
        <p>
          <b>Date:</b>
          &nbsp;
          {launchDate
            ? new Date(launchDate).toLocaleDateString()
            : 'Date unavailable.'}
        </p>
        <p>
          <b>Rocket:</b>
          &nbsp;
          {rocketName || 'Rocket unavailable.'}
          &nbsp;
          {(rocketName && rocketType) || ''}
        </p>
      </Cell>
    </MainContainer>
  );
}
