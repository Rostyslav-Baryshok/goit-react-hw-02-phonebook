import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 0;
  max-width: 400px;
`;

export const Button = styled.button`
  padding: 4px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 0px 4px 2px #afafaf;
  transition: all 0.3s ease;
  display: block;
  :hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.delete};
    transition: all 0.3s ease;
    box-shadow: 0px 0px 2px 1px #212121;
  }
`;
