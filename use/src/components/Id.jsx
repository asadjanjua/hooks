import React, { useId, useEffect } from 'react';

const Id = () => {
  const id = useId();

  useEffect(() => {
    console.log("Generated ID:", id);
  }, [id]);

  return (
    <div>
      <label htmlFor={id}>Enter your name:</label>
      <input id={id} type="text" />
    </div>
  );
};

export default Id;
