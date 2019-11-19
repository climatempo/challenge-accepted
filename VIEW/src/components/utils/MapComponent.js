import React from 'react';

export default props =>
  props.data.map((d, i) => {
    let prop;
    let key = props.itemKey ? d[props.itemKey] : i;
    if (typeof d === 'string') {
      prop = { value: d, key: key };
    } else {
      prop = Object.assign({ key: key }, d);
    }
    return React.cloneElement(props.children, prop);
  });
