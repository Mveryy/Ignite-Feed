import styled from 'styled-components';

export const Container = styled.div`
`

export const Content = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Feed = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    margin: auto;
  }
`;
