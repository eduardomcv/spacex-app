import styled from 'styled-components';

export default styled.button`
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #68bdff;
  border: unset;
  border-radius: 10%;
  cursor: pointer;

  :hover {
    background-color: #84caff;
  }

  :active {
    background-color: #3396e1;
  }

  :disabled {
    cursor: not-allowed;
  }
`;
