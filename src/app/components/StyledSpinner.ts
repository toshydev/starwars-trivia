import styled from 'styled-components';

export const StyledSpinner = styled.div`
  border: 0.5rem solid #00002c;
  border-top: 0.5rem solid cyan;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg) scale(0.5);
    }
    100% {
      transform: rotate(360deg) scale(0.5);
    }
  }
`;
