import styled from 'styled-components';

export const SearchContainer =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const IconSearch = styled.span`
  margin-top: 2px;
  width: 40px;
  svg {
    transition: color 200ms;
    font-size: 20px;
    margin-left: 10px;
  }
`;

export const ButtonClose = styled.button`
  width: 25px;
  margin-top: 2px;
  margin-right: 10px;
  font-size: 20px;
  color: #ccc;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #dcdde0;
  width: fit-content;
  display: flex;
  align-items: center;
  
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    width: 380px;
  }
  @media (max-width: 480px) {
    width: 320px;
  }
`;

export const SearchInput = styled.input`
  background-color: white;
  color: gray;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  width: 416px;
  height: 48px;
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  &::placeholder {
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: gray;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: gray;
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;