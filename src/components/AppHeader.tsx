import styled from 'styled-components';
import router from '../routes/router';
import SpaceXLogo from '../assets/spacex-logo.svg';

const Header = styled.header`
  display: grid;
  place-content: center;
  background-color: hsl(218 61% 20%);
  height: 5rem;
`;

const Image = styled.img`
  width: 18rem;
`;

export default function AppHeader() {
  return (
    <Header>
      <router.Link href="/">
        <Image src={SpaceXLogo} alt="Space X" />
      </router.Link>
    </Header>
  );
}
