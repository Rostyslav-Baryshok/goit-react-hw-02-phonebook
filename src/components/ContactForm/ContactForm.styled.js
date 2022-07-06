import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 7px 5px;
  border-radius: 9px;
  border: none;
  box-shadow: ${props => ` 0px 0px 2px 1px ${props.theme.colors.secondary}`};

  transition: all 0.3s ease;
  display: block;
  margin: 15px auto;
  :hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.accent};
    transition: all 0.3s ease;
    box-shadow: ${props => ` 0px 0px 2px 1px ${props.theme.colors.shadowBow}`};
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const InputEl = styled.span`
  display: flex;
  justify-content: center;
`;
