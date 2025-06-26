import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfModalProps {
    fileUrl: string | null;
    onClose: () => void;
}



const PdfModal: React.FC<PdfModalProps> = ({ fileUrl, onClose }) => {
    if (!fileUrl) return null;
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className="fixed inset-0 bg-black/50  bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white p-10 rounded shadow-lg max-w-3xl w-full relative">
                <button className="absolute top-2 right-2" onClick={onClose}>Close</button>
                <div style={{ height: '80vh' }}>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={fileUrl} />
                    </Worker>
                </div>
            </div>
        </div>
    );
};

export default PdfModal;