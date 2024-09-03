import React, { useState } from 'react';


const ReportGeneration = () => {
  const [reportType, setReportType] = useState('reservations');
  const [format, setFormat] = useState('pdf');
  const [reportData, setReportData] = useState(null);

  const handleGenerateReport = async () => {
    try {
      const response = await fetch(`/api/reports?type=${reportType}&format=${format}`);
      const data = await response.blob(); // Assuming the response is a file blob

      if (data) {
        // Create a link element to download the file
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `report.${format}`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      }
    } catch (error) {
      console.error('Failed to generate report:', error);
    }
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col'>


      <div className='flex-grow'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <h1 className='text-4xl font-bold text-center mb-8 text-[#d4af37]'>Report Generation</h1>

          <div className='bg-[#262626] p-6 rounded-lg'>
            <h2 className='text-2xl font-bold mb-4 text-[#d4af37]'>Select Report Type</h2>
            <select
              className='w-full p-3 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value='reservations'>Reservations</option>
              <option value='payments'>Payments</option>
              <option value='feedback'>Feedback</option>
            </select>

            <h2 className='text-2xl font-bold mt-8 mb-4 text-[#d4af37]'>Select Format</h2>
            <select
              className='w-full p-3 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value='pdf'>PDF</option>
              <option value='excel'>Excel</option>
            </select>

            <div className='flex justify-center mt-8'>
              <button
                className='bg-[#d4af37] text-black px-6 py-3 rounded-md hover:scale-105 duration-300'
                onClick={handleGenerateReport}
              >
                Generate Report
              </button>
            </div>

            {reportData && (
              <div className='mt-8 text-center'>
                <a
                  href={URL.createObjectURL(new Blob([reportData]))}
                  download={`report.${format}`}
                  className='text-[#d4af37] underline'
                >
                  Download Report
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReportGeneration;
