import React from "react";
import styled from "@emotion/styled";
import { Resizable } from "re-resizable";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LeftDiv = styled.div`
  flex: 1;
  background-color: #2980b9;
`;

const RightDiv = styled.div`
  margin-left: 20px;
  background-color: skyblue;
  height: 100%;
`;

const FlexTest = () => {
  return (
    <Container>
      <LeftDiv />
      <Resizable
        defaultSize={{ width: "50%", height: "100%" }}
        minWidth={"20%"}
        maxWidth={"80%"}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        handleStyles={{
          left: {
            width: "20px",
            height: "100%",
            left: "0px",
            backgroundColor: "#d1d5db",
          },
        }}
      >
        <RightDiv />
      </Resizable>
    </Container>
  );
};

export default FlexTest;
