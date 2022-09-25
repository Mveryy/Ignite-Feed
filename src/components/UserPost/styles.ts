import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.gray800};
  color: ${theme.colors.gray100};
  max-width: 1200px;
  padding: 2.5rem;
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-inline: auto;
  }
`;

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;
`;

export const PostProfileImage = styled.img`
  background-color: ${theme.colors.gray800};
  width: 60px;
  height: 60px;
  border: 5px solid ${theme.colors.gray800};
  border-radius: 10px;
  outline: 3px solid ${theme.colors.green500};
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AuthorName = styled.h3`
  font-weight: 700;
  color: ${theme.colors.gray100};
`;

export const AuthorDescription = styled.p`
  color: ${theme.colors.gray400};
`;

export const PostTime = styled.time`
  position: absolute;
  right: -10px;
  top: -20px;
  font-size: 0.875rem;
  color: ${theme.colors.gray400};
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PostParagraph = styled.p`
`;

export const PostLink = styled.a`
  font-weight: 700;
  color: ${theme.colors.green500};
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
`;

export const PostDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.gray600};
`;

export const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;

  &:focus-within footer {
    visibility: visible;
    max-height: none;
    opacity: 100;
    margin-top: 1rem;
  };
`;

export const FeedbackTitle = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Input = styled.textarea`
  width: 100%;
  min-height: 6rem;
  height: fit-content;
  background-color: ${theme.colors.gray900};
  border-radius: 8px;
  border: none;
  color: ${theme.colors.gray100};
  font-family: "Roboto", sans-serif;
  resize: none;
  padding: .7rem;

  &:focus {
    outline: 1px solid ${theme.colors.green500};
  };
`;

export const FormFooter = styled.footer`
  visibility: hidden;
  max-height: 0;
  opacity: 0;
`;

export const PostButton = styled.button`
  background-color: ${theme.colors.green600};
  color: ${theme.colors.white};
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.green500};
  };

  &:disabled {
    cursor: default;
    background-color: ${theme.colors.gray600};
    color: ${theme.colors.gray400}
  }
`;
