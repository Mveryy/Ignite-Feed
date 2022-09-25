import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 16rem;
  height: 18rem;
  border-radius: 8px;
  background-color: ${theme.colors.gray800};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-inline: auto;
  }
`;

export const Background = styled.img`
  width: 100%;
`;

export const ProfileImage = styled.img`
  background-color: ${theme.colors.gray800};
  width: 60px;
  height: 60px;
  border: 5px solid ${theme.colors.gray800};
  border-radius: 10px;
  margin-top: -30px;
  outline: 3px solid ${theme.colors.green500};
`;

export const Name = styled.h3`
  font-weight: 700;
  color: ${theme.colors.gray100};
  margin: 20px 0 10px 0;
`;

export const Description = styled.p`
  color: ${theme.colors.gray400};
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.gray600};
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 80%;
  height: 50px;
  background-color: transparent;
  color: ${theme.colors.green500};
  border: 2px solid ${theme.colors.green500};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: auto;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-size: 16px;
  font-weight: 700;
  
  &:hover {
    background-color: ${theme.colors.green500};
    color: ${theme.colors.gray100};
  };
`;
