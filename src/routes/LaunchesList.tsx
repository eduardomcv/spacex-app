import styled from 'styled-components';
import GridList from '../components/GridList';
import ListItem from '../components/ListItem';
import LaunchPreview from '../components/LaunchPreview';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  margin-top: 2rem;
  padding: 0 2rem;
`;

export default function LaunchesList() {
  return (
    <MainContainer>
      <GridList>
        {Array(20)
          .fill(undefined)
          .map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={index}>
              <LaunchPreview
                launch={{
                  id: `${index}`,
                  missionName: 'mission',
                  rocketName: 'rocket',
                  image: '',
                }}
              />
            </ListItem>
          ))}
      </GridList>
    </MainContainer>
  );
}
