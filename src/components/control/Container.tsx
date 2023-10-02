import theme from '@/utils/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  @media (min-width: ${theme.breakpoints.laptop}) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;
