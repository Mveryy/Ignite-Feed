import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.colors.gray700};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 15px;
`;

export const Title = styled.h1`
  color: ${theme.colors.gray100};
`;