import React from "react";
import styled from "styled-components";
import { Resizable } from "react-resizable"; // react-resizable 라이브러리에서 Resizable 컴포넌트를 가져옴
import "react-resizable/css/styles.css"; // react-resizable 라이브러리의 스타일 시트를 가져옴

// 스타일 컴포넌트를 사용하여 위젯의 스타일을 정의
const WidgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  background-color: #f8f8f8;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
`;

const WidgetItem = styled.div`
  flex: 1;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const WidgetTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const WidgetDescription = styled.p`
  font-size: 14px;
  color: #777;
`;

// 위젯 컴포넌트 정의
const Widget = ({ title, description, width, height }) => {
  const [widgetWidth, setWidgetWidth] = React.useState(width || 100);
  const [widgetHeight, setWidgetHeight] = React.useState(height || 100);

  const onResize = (event, { size }) => {
    setWidgetWidth(size.width);
    setWidgetHeight(size.height);
  };

  return (
    <Resizable // react-resizable 라이브러리의 Resizable 컴포넌트를 사용하여 크기 조절 기능 추가
      width={widgetWidth}
      height={widgetHeight}
      minWidth={100}
      minHeight={100}
      handleStyles={{
        // 크기 조절 핸들의 스타일을 지정
        bottomRight: {
          // 오른쪽 하단 핸들
          backgroundColor: "gray",
          border: "1px solid white",
          borderRadius: "3px",
          right: 0,
          bottom: 0,
          width: "10px",
          height: "10px",
          cursor: "se-resize",
          zIndex: 1,
        },
      }}
      onResize={onResize} // 크기 조절 시 호출될 콜백 함수 지정
    >
      <WidgetContainer width={widgetWidth} height={widgetHeight}>
        <WidgetItem>
          <WidgetTitle>{title}</WidgetTitle>
          <WidgetDescription>{description}</WidgetDescription>
        </WidgetItem>
      </WidgetContainer>
    </Resizable>
  );
};

// 예시로 두 개의 위젯을 렌더링
const Flex = () => {
  return (
    <div>
      <Widget title="Widget 1" description="This is Widget 1" />
      <Widget title="Widget 2" description="This is Widget 2" />
    </div>
  );
};

export default Flex;
