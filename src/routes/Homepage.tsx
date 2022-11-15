import { useQuery } from '@tanstack/react-query';
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
  align-items: center;
`;

export default function Homepage() {
  return (
    <MainContainer>
      <GridList>
        {Array(20)
          .fill(undefined)
          .map(() => (
            <ListItem>
              <Ship image="" name="ship name" />
            </ListItem>
          ))}
      </GridList>
    </MainContainer>
  );
}
