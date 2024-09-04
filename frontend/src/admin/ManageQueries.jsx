import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';


const ManageQueries = () => {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Mock fetching data from API or backend service
    const fetchQueries = async () => {
      const response = await fetch('/api/queries'); // Replace with actual API endpoint
      const data = await response.json();
      setQueries(data);
    };

    fetchQueries();
  }, []);

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSendResponse = (queryId) => {
    // Logic to send the response to the customer
    console.log('Sending response to query ID:', queryId, 'Response:', response);
    // Clear the response after sending
    setResponse('');
    setSelectedQuery(null);
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-between'>
<AdminNavbar/>

      <div className='flex-grow mt-16'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <h1 className='text-4xl font-bold text-center mb-8 text-[#d4af37]'>Manage Queries</h1>
          
          {/* Queries List */}
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-[#1c1c1c] text-white'>
              <thead>
                <tr>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Customer</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Query</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Date</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {queries.map((query) => (
                  <tr key={query.id} className='hover:bg-[#333333]'>
                    <td className='px-6 py-4 border-b border-gray-600'>{query.customerName}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>{query.queryText}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>{new Date(query.date).toLocaleDateString()}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>
                      <button
                        className='bg-[#d4af37] text-black px-4 py-2 mr-2 rounded-md hover:scale-105 duration-300'
                        onClick={() => setSelectedQuery(query)}
                      >
                        Respond
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Respond to Query */}
          {selectedQuery && (
            <div className='mt-8'>
              <h2 className='text-2xl font-bold text-center mb-4 text-[#d4af37]'>Respond to Query</h2>
              <div className='max-w-[600px] mx-auto bg-[#262626] p-6 rounded-lg'>
                <div className='mb-4'>
                  <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='queryText'>
                    Query
                  </label>
                  <p className='bg-black text-white p-2 rounded-md'>{selectedQuery.queryText}</p>
                </div>
                <div className='mb-4'>
                  <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='response'>
                    Response
                  </label>
                  <textarea
                    className='w-full p-2 rounded-md bg-black text-white'
                    id='response'
                    name='response'
                    value={response}
                    onChange={handleResponseChange}
                    rows='4'
                  />
                </div>
                <div className='flex justify-center'>
                  <button
                    className='bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300'
                    onClick={() => handleSendResponse(selectedQuery.id)}
                  >
                    Send Response
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default ManageQueries;
