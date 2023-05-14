import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;
  color: black;
  &:hover {
    color: blue;
  }
`;
