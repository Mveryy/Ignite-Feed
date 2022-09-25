import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  min-width: 10rem;
  /* height: 10rem; */
  border-radius: 8px;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Feedback = styled.div`
  background-color: ${theme.colors.gray700};
  border-radius: 8px;
  padding: 1rem;
  padding-bottom: 1.56rem;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 0.875rem;
  color: ${theme.colors.gray100};
  display: flex;
  gap: 0.2rem;
`;

export const Span = styled.span`
  color: ${theme.colors.gray400};
  display: flex;
  flex: 1;
  justify-content: space-between;

  * {
    &:hover {
      cursor: pointer;
      color: ${theme.colors.red500};
    }
  }
`;

export const FeedbackTime = styled.p`
  color: ${theme.colors.gray400};
  font-size: 0.75rem;
`;
export const FeedbackText = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.gray100};
  margin-top: 1rem;
`;

export const Button = styled.button`
  color: ${theme.colors.gray300};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: fit-content;

  &:hover {
    color: ${theme.colors.green500};
  }
`;


