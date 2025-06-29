import React from 'react';
    import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
    import { COLUMNS } from './columns'; // Assuming columns.js is in the same directory
    import { DATA } from './data'; // Assuming data.js is in the same directory

    function MyTable() {
      const table = useReactTable({
        data: DATA,
        columns: COLUMNS,
        getCoreRowModel: getCoreRowModel(),
      });

      return (
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
                        {header.column.columnDef.header}
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {cell.getValue()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    export default MyTable;
