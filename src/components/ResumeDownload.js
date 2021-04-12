import React from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';


function Test(props) {
  return (
    <Document file={props}>
      <Page pageNumber={1}/>
    </Document>
  );
}

export default Test;