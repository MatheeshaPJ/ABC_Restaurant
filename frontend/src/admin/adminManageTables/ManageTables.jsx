import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar';

const TableManagement = () => {
  const [tables, setTables] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newTable, setNewTable] = useState({ tableNo: '', seatCount: '' });
  const [currentTable, setCurrentTable] = useState({ tableId: null, tableNo: '', seatCount: '' });

  // Load tables when component is mounted
  useEffect(() => {
    loadTables();
  }, []);

  const loadTables = async () => {
    try {
      const result = await axios.get('http://localhost:8080/table/getalltables');
      setTables(result.data);
    } catch (error) {
      console.error('Error fetching tables:', error);
    }
  };

  const addTable = async () => {
    if (!newTable.tableNo.trim() || !newTable.seatCount) {
      return alert('All fields are required.');
    }
    try {
      await axios.post('http://localhost:8080/table/create', newTable);
      loadTables();
      setShowAddModal(false);
      setNewTable({ tableNo: '', seatCount: '' });
    } catch (error) {
      console.error('Error adding table:', error);
    }
  };

  const editTable = async () => {
    if (!currentTable.tableNo.trim() || !currentTable.seatCount) {
      return alert('All fields are required.');
    }
    try {
      await axios.put(`http://localhost:8080/table/update/${currentTable.tableId}`, currentTable);
      loadTables();
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating table:', error);
    }
  };

  const deleteTable = async (id) => {
    if (window.confirm('Are you sure you want to delete this table?')) {
      try {
        await axios.delete(`http://localhost:8080/table/delete/${id}`);
        loadTables();
      } catch (error) {
        console.error('Error deleting table:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white h-screen">
      <AdminNavbar />

      <div className="mt-20">
        <h1 className="text-center text-2xl font-bold text-[#f09c20]">TABLE MANAGEMENT</h1>
      </div>

      <div className="flex justify-between mt-5">
        <button
          onClick={() => setShowAddModal(true)}
          className="outline outline-[#f09c20] text-[#f09c20] hover:bg-[#f09c20] hover:text-white hover:outline-none py-2 px-4 rounded mr-2"
        >
          Add New Table
        </button>
      </div>

      <div className="overflow-x-auto shadow-xl mt-5">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">ID</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Table Number</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">No. of Seats</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table) => (
              <tr key={table.tableId} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                <td className="px-4 py-2 text-gray-700 text-center font-bold">{table.tableId}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{table.tableNo}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{table.seatCount}</td>
                <td className="px-4 py-2 text-center bg-gray-50">
                  <button
                    onClick={() => {
                      setCurrentTable(table);
                      setShowEditModal(true);
                    }}
                    className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-1 px-3 rounded mr-2 text-xs"
                  >
                    Edit
                  </button>
                  <button
                    className="outline outline-red-600 text-red-700 hover:bg-red-700 hover:text-white hover:outline-none py-1 px-3 rounded text-xs"
                    onClick={() => deleteTable(table.tableId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Table Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4 text-[#f09c20]">Add New Table</h2>
            <input
              type="text"
              className="border w-full p-2 mb-4"
              placeholder="Enter table number"
              value={newTable.tableNo}
              onChange={(e) => setNewTable({ ...newTable, tableNo: e.target.value })}
            />
            <input
              type="number"
              className="border w-full p-2 mb-4"
              placeholder="Enter no. of seats"
              min={0}
              max={12}
              value={newTable.seatCount}
              onChange={(e) => setNewTable({ ...newTable, seatCount: e.target.value })}
            />
            <div className="flex justify-end">
              <button
                className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-2 px-4 rounded mr-2"
                onClick={addTable}
              >
                Save
              </button>
              <button
                className="outline outline-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white hover:outline-none py-2 px-4 rounded"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Table Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4 text-[#f09c20]">Edit Table</h2>
            <input
              type="text"
              className="border w-full p-2 mb-4"
              value={currentTable.tableNo}
              onChange={(e) => setCurrentTable({ ...currentTable, tableNo: e.target.value })}
            />
            <input
              type="number"
              className="border w-full p-2 mb-4"
              value={currentTable.seatCount}
              onChange={(e) => setCurrentTable({ ...currentTable, seatCount: e.target.value })}
            />
            <div className="flex justify-end">
              <button
                className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-2 px-4 rounded mr-2"
                onClick={editTable}
              >
                Update
              </button>
              <button
                className="outline outline-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white hover:outline-none py-2 px-4 rounded"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableManagement;
