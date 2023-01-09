import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0 20px 0;
`;

export const HeaderTitle = styled(NavLink)`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: ${({ theme }) => theme.palette.text};
  text-decoration: none;
`;
