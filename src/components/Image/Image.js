import React from 'react';

import './Image.css';

const image = props => {
console.log(props.imageUrl)

return (
  <div
    className="image"
    style={{
      backgroundImage: `url('${stringEscape(props.imageUrl)}')`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      backgroundPosition: props.left ? 'left' : 'center'
    }}
  />);
};


function stringEscape(s) {
  return s ? s.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\t/g,'\\t').replace(/\v/g,'\\v').replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/[\x00-\x1F\x80-\x9F]/g,hex) : s;
  function hex(c) { var v = '0'+c.charCodeAt(0).toString(16); return '\\x'+v.substr(v.length-2); }
}

export default image;
