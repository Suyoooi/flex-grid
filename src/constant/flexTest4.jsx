import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function FelxTest4() {
  const [compactType, setcompactType] = useState("vertical");
  const [mounted, setmounted] = useState(false);
  const [layout, setlayout] = useState([
    { i: "a", x: 0, y: 0, w: 5, h: 9 },
    { i: "b", x: 0, y: 1, w: 5, h: 9 },
    { i: "c", x: 5, y: 0, w: 6, h: 9 },
    { i: "d", x: 5, y: 2, w: 5, h: 9 },
    // { i: "e", x: 0, y: 2, w: 1, h: 2 },
    // { i: "f", x: 1, y: 2, w: 4, h: 2 },
    // { i: "g", x: 4, y: 0, w: 1, h: 2 },
    // { i: "h", x: 1, y: 0, w: 3, h: 5 },
    // { i: "i", x: 4, y: 0, w: 1, h: 3 },
    // { i: "j", x: 0, y: 2, w: 1, h: 2 },
    // { i: "k", x: 0, y: 2, w: 1, h: 4 },
    // { i: "l", x: 1, y: 2, w: 4, h: 3 },
  ]);

  useEffect(() => {
    setmounted(true);
  }, []);

  return (
    <div>
      <ResponsiveReactGridLayout
        rowHeight={30}
        layout={layout}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
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
