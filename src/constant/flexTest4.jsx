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
