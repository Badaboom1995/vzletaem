import styled from "styled-components";

export const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  margin-bottom: 10px;
`;
export const TaskArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
export const Title = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
`;
export const Desc = styled.p`
  font-size: 14px;
  color: #696969;
  margin: 0;
`;
