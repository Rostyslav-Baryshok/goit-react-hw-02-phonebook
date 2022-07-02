import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 9px 0;
  border-radius: 9px;
  border: none;
  :hover {
    background-color: var(--secondary);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 400px;
  padding: 10px 0;
`;
export const Label = styled.label``;
