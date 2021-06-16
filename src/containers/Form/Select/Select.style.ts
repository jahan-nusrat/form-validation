import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 20px 0;
  display: flex;
  flex: 1;
  font-family: 'Roboto';
  font-weight: normal;
`;

export const DropDownHeader = styled.div`
  width: 100%;
  border: 1px solid rgba(237,237,237,1);
  border-radius: 5px;
  padding: 15px;
  font-size: 15px;
  line-height: 18px;
  color: rgba(119,119,119,1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropDownListContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 100;
  width: 100%;
  top: calc(100% + 5px);
  background: #ffffff;
  border: 1px solid rgba(237,237,237,1);
  border-radius: 5px;
  padding: 5px;
`;

export const ListItem = styled.li`
  font-size: 12px;
  line-height: 14px;
  padding: 10px 15px;
  color: rgba(119,119,119,1);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 5px;
  svg {
    visibility: hidden;
  }
  /* &:last-child {
    padding-bottom: 0;
  } */
  &:hover {
    background-color: #EDEDED;
    svg {
      visibility: visible;
    }
  }
`;