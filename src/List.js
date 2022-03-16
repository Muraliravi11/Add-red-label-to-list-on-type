import React, { memo } from 'react';

const List = ({ list }) => {
  console.log(list);

  return (
    <ul>
      {list.map((list, index) => (
        <li key={index} style={{ color: isUppercase(list) }}>
          {list}
        </li>
      ))}
    </ul>
  );
};

export default memo(List);
