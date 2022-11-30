import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-content: center;
  margin: 2rem;
`;

const Text = styled.span`
  color: white;
  font-size: 2em;
  font-weight: 600;
`;

interface PlaceholderProps {
  text: string;
}

export default function Placeholder({ text }: PlaceholderProps) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
