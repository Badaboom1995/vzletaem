import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 100px;
  background-color: #f6f6f6;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const Content = styled.div`
  width: 500px;
  height: 70vh;
  overflow: scroll;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
`;
export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;
export const Button = styled.button`
  background-color: ${(props) => (props.delete ? "transparent" : "#444")};
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.delete ? "#BF211E" : "#fff")};
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  min-width: 100px;
  &:focus,
  &:hover {
    background-color: ${(props) => (props.delete ? "#f9f9f9" : "#666")};
  }
  &:active {
    background-color: ${(props) => (props.delete ? "#f6f6f6" : "#333")};
  }
`;
