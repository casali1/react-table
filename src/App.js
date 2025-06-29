import './App.css';
import React from 'react';
import fakeData from './MOCK_DATA.json';
import { useTable } from 'react-table';

function App() {

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => [
    
  {
    Header: 'ID',
    accessor: 'id', // accessor is the "key" in the data
  }, {
    Header: 'First Name',
    accessor: 'first_name',
  }, {
    Header: 'Last Name',
    accessor: 'last_name',
  }, {
    Header: 'Email',
    accessor: 'email',
  }]);

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ columns, data });

  return (
    <div className="App">
        <div className="table-container">
            <table>
              <thead>

              </thead>
              <tbody>
                
              </tbody>
            </table>
        </div>
    </div>
  );
}

export default App;
