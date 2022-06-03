import React from 'react';
import Title from './comps/Title';
import UploadForm from "./comps/UploadForm";

function App() {
    console.log('allo');
  return (
      <div className="App">
        <Title/>
          <UploadForm />
      </div>
  );
}

export default App;
