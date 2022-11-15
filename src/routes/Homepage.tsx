import styled from 'styled-components';
import GridList from '../components/GridList';
import ListItem from '../components/ListItem';
import LaunchPreview from '../components/LaunchPreview';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: auto;
  margin-top: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
`;

export default function Homepage() {
  return (
    <MainContainer>
      <GridList>
        {Array(20)
          .fill(undefined)
          .map(() => (
            <ListItem>
              <LaunchPreview
                launch={{
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
