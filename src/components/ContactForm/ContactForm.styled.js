import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 9px;
  border: none;
  box-shadow: 0px 0px 2px 2px #afafaf;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  :hover {
    background-color: ${({ theme }) => theme.colors.light};
    transition: all 0.3s ease;
  }
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 10px 0;
`;
export const Label = styled.label``;

export const InputEl = styled.span`
  display: flex;
  justify-content: center;
`;
