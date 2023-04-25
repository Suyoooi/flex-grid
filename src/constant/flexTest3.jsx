import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const FlexTest3 = (props) => {
  const [layouts, setLayouts] = useState({
    lg: _.map(_.range(0, 25), function (item, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (_.random(0, 5) * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05,
      };
    }),
  });
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [compactType, setCompactType] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [toolbox, setToolbox] = useState({
    lg: [],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
    setToolbox({
      ...toolbox,
      [breakpoint]: toolbox[breakpoint] || toolbox[currentBreakpoint] || [],
    });
  };

  const onCompactTypeChange = () => {
    let oldCompactType = "";

    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
        ? null
        : "horizontal";
    setCompactType(compactType);
  };

  const onLayoutChange = (layout, layouts) => {
    setLayouts({ ...layouts });
  };

  const onDrop = (layout, layoutItem, _ev) => {
    alert(
      `Element parameters:\n${JSON.stringify(
        layoutItem,
        ["x", "y", "w", "h"],
        2
      )}`
    );
  };

  const generateDOM = () => {
    return _.map(layouts.lg, function (l, i) {
      return (
        <div
          key={i}
          style={{ background: "#ccc" }}
          className={l.static ? "static" : ""}
        >
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <div
        className="droppable-element"
        style={{
          width: "200",
          textAlign: "center",
          background: "#fdd",
          border: "1",
          borderColor: "black",
          margin: "10",
          padding: "10",
        }}
        draggable
        unselectable="on"
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Droppable Element (Drag me!)
      </div>

      <div className="mb-4">
        <ResponsiveReactGridLayout
          {...props}
          style={{ background: "#f0f0f0" }}
          layouts={layouts}
          measureBeforeMount={false}
          useCSSTransforms={mounted}
          compactType={compactType}
          preventCollision={!compactType}
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakpointChange}
          onDrop={onDrop}
          isDroppable
        >
          {generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    </>
  );
};

export default FlexTest3;

FlexTest3.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: (layout, layouts) => {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  containerPadding: [0, 0],
};
