import React, { useState } from 'react';
import StaffNavbar from './StaffNavbar';

const queriesData = [
    { id: 1, name: 'John Doe', query: 'What are your business hours?', status: 'Pending', response: '' },
    { id: 2, name: 'Jane Smith', query: 'Do you offer vegan options?', status: 'Responded', response: 'Yes, we have several vegan options on our menu.' },
    { id: 3, name: 'Sam Wilson', query: 'Can I make a reservation for 10 people?', status: 'Pending', response: '' },
    // Add more sample data as needed
];

const ManageQueries = () => {
    const [queries, setQueries] = useState(queriesData);
    const [currentResponse, setCurrentResponse] = useState('');

    const handleResponseChange = (e) => {
        setCurrentResponse(e.target.value);
    };

    const handleRespond = (id) => {
        setQueries((prevQueries) =>
            prevQueries.map((query) =>
                query.id === id ? { ...query, status: 'Responded', response: currentResponse } : query
            )
        );
        setCurrentResponse('');
    };

    return (
        <div>
             <StaffNavbar/>
            <div className="min-h-screen bg-black text-white p-6 pt-20">
                <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-8">Manage Queries</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-[#1f1f1f] rounded-lg">
                        <thead>
                            <tr>
                                <th className="px-6 py-4 text-left">Customer Name</th>
                                <th className="px-6 py-4 text-left">Query</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-left">Response</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {queries.map((query) => (
                                <tr key={query.id} className="border-b border-gray-700">
                                    <td className="px-6 py-4">{query.name}</td>
                                    <td className="px-6 py-4">{query.query}</td>
                                    <td className="px-6 py-4">{query.status}</td>
                                    <td className="px-6 py-4">{query.response}</td>
                                    <td className="px-6 py-4 text-center">
                                        {query.status === 'Pending' && (
                                            <>
                                                <textarea
                                                    className="bg-gray-800 text-white w-full p-2 rounded-md mb-2"
                                                    placeholder="Write your response here..."
                                                    value={currentResponse}
                                                    onChange={handleResponseChange}
                                                />
                                                <button
                                                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
                                                    onClick={() => handleRespond(query.id)}
                                                >
                                                    Respond
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageQueries;
