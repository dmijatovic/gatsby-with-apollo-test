import React from 'react';

const JsonViewer = data => {
  return (
    <section style={{background:'#333', color:'#fff', textAlign:'left', padding:'1rem'}}>
      <pre>
        {JSON.stringify(data,undefined, 2)}
      </pre>
    </section>
  );
};

export default JsonViewer;