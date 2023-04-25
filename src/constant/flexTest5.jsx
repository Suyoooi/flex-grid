import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

//sessionStorage 사용 (변경된 layout 값을 저장함)

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function FlexTest5() {
  const [mounted, setMounted] = useState(false);
  const [layout, setLayout] = useState(() => {
    // sessionStorage에서 layout 값을 가져옴(layout을 string 형식으로 가져옴 -> why?)
    //layout은 객체 배열
    const sessionStorageLayout = sessionStorage.getItem("layout");
    return sessionStorageLayout
      ? JSON.parse(sessionStorageLayout)
      : [
          //layout 값을 x축, y축 좌표 값으로 설정해서 배치
          //나중에 + Button을 넣어서 layout 값을 추가할 수 있도록 하는것도?
          { i: "a", x: 0, y: 0, w: 5, h: 9 },
          { i: "b", x: 0, y: 1, w: 5, h: 9 },
          { i: "c", x: 5, y: 0, w: 6, h: 9 },
          { i: "d", x: 5, y: 2, w: 5, h: 9 },
        ];
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // layout 객체를 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  return (
    <div>
      <ResponsiveReactGridLayout
        rowHeight={30}
        layout={layout}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        isDroppable={true}
        droppingItem={{ i: "xx", h: 50, w: 250 }}
        // layout 값이 변경될 때마다 sessionStorage와 state를 업데이트
        onLayoutChange={(newLayout) => setLayout(newLayout)}
      >
        {layout.map((itm, i) => (
          <div
            key={itm.i}
            data-grid={itm}
            className="block"
            style={{
              //백그라운드 컬러인데 박스 컬러가 변경됨
              backgroundColor: "lightpink",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {i}
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}
