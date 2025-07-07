import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const Layout = () => {
  const boxRef = useRef();
  const [widthEffect, setWidthEffect] = useState(0);
  const [widthLayoutEffect, setWidthLayoutEffect] = useState(0);

  // Runs AFTER the screen updates
  useEffect(() => {
    if (boxRef.current) {
      const width = boxRef.current.getBoundingClientRect().width;
      setWidthEffect(width);
      console.log('useEffect width:', width);
    }
  }, []);

  // Runs BEFORE the screen updates (blocks paint)
  useLayoutEffect(() => {
    if (boxRef.current) {
      const width = boxRef.current.getBoundingClientRect().width;
      setWidthLayoutEffect(width);
      console.log('useLayoutEffect width:', width);
    }
  }, []);

  return (
    <div>
      <div ref={boxRef}>Box</div>

      <p>Width measured by useLayoutEffect: {widthLayoutEffect}px</p>
      <p>Width measured by useEffect: {widthEffect}px</p>
    </div>
  );
};

export default Layout;
