import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function FlexTest4() {
  const [compactType, setCompactType] = useState("vertical");
  const [mounted, setMounted] = useState(false);
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 5, h: 9 },
    { i: "b", x: 0, y: 1, w: 5, h: 9 },
    { i: "c", x: 5, y: 0, w: 6, h: 9 },
    { i: "d", x: 5, y: 2, w: 5, h: 9 },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // layout 객체를 JSON 문자열로 변환하여 쿠키에 저장
  useEffect(() => {
    document.cookie = `layout=${JSON.stringify(
      layout
    )}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  }, [layout]);

  // 쿠키에서 layout 객체를 가져와서 객체로 변환하여 설정
  useEffect(() => {
    const cookieLayout = document.cookie
      .split(";")
      .find((item) => item.trim().startsWith("layout="));

    if (cookieLayout) {
      const parsedLayout = JSON.parse(cookieLayout.split("=")[1]);
      setLayout(parsedLayout);
    }
  }, []);

  return (
    <div>
      <ResponsiveReactGridLayout
        rowHeight={30}
        layout={layout}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        isDroppable={true}
        droppingItem={{ i: "xx", h: 50, w: 250 }}
      >
        {layout.map((itm, i) => (
          <div
            key={itm.i}
            data-grid={itm}
            className="block"
            style={{
              backgroundColor: "Pink",
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

//layout 값을 쿠키에 저장해 보았다... 근데 안되는것 같다....
