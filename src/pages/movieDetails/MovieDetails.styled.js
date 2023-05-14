import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  background-color: transparent;
  &:hover {
    background-color: yellow;
    color: blue;
  }
`;

export const LinkBack = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
  &:hover {
    background-color: yellow;
    color: blue;
  }
`;
