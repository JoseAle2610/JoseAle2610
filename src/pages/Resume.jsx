import { PageTemplate } from "@/templates/PageTemplate"
import styled from "styled-components"
import { Document, Page, pdfjs } from "react-pdf"
import { useState, useEffect } from 'react'
import { ButtonBlack } from "@/components/Button";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfContainer = styled.div`
    .react-pdf__Page{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .react-pdf__Page canvas{
        width: 100% !important;
        height: auto !important;
    }

    .react-pdf__Page__textContent {
        display: none;
    }
    .react-pdf__Page__annotations {
        display: none;
    }
`

export const Resume = () => {

    const [location, setLocation] = useState()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let path = window.location.protocol + '//' + window.location.host ; // (or whatever)
            setLocation(path)
          }
    }, []);
    
    return (
        <PageTemplate 
        title={''}
        description={""}>
            <PdfContainer>
                <Document file={`${location}/curriculum-jose-suarez.pdf`}>
                    <Page pageNumber={1} scale={1.3} />
                </Document>
                <div style={{display: 'flex', justifyContent: 'end'}}>

                    <ButtonBlack href="/curriculum-jose-suarez.pdf" download>Descargar</ButtonBlack>
                </div>
            </PdfContainer>
        </PageTemplate>
    )
}