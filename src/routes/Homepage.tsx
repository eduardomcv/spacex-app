import styled from 'styled-components';
import GridList from '../components/GridList';
import ListItem from '../components/ListItem';
import Ship from '../components/Ship';

const MainContainer = styled.main`
  max-width: 600px;
  margin: auto;
`;

export default function Homepage() {
  return (
    <MainContainer>
      <GridList>
        {Array(9)
          .fill(undefined)
          .map(() => (
            <ListItem>
              <Ship />
            </ListItem>
          ))}
      </GridList>
    </MainContainer>
  );
}
