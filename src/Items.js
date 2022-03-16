import React, { memo } from 'react';

const Items = ({ list }) => {
  console.log(list);

  return (
    <ul>
      {/* {list.map((list, index) => (
        <li key={index} style={{ color: isUppercase(list) }}>
          {list}
        </li>
      ))} */}
      <p>hello</p>
    </ul>
  );
};

export default memo(Items);
