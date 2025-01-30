import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const SalesReport = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const { data, isLoading, error } = useQuery(
      ['salesData', startDate, endDate],
      () => fetchSalesData(startDate, endDate),
      {
        enabled: startDate && endDate, // Only fetch if date range is provided
      }
    );
  
    const columns = React.useMemo(
      () => [
        { Header: 'Medicine Name', accessor: 'medicineName' },
        { Header: 'Seller Email', accessor: 'sellerEmail' },
        { Header: 'Buyer Email', accessor: 'buyerEmail' },
        { Header: 'Total Price', accessor: 'totalPrice' },
        { Header: 'Date', accessor: 'date' },
      ],
      []
    );
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
      columns,
      data: data || [],
    });
  
    const handleExportCSV = () => {
      // Implement CSV export functionality
    };
  
    const handleExportXLSX = () => {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sales Report');
      XLSX.writeFile(wb, 'sales_report.xlsx');
    };
  
    const handleExportPDF = () => {
      const doc = new jsPDF();
      doc.text('Sales Report', 20, 20);
      data.forEach((sale, index) => {
        doc.text(`${sale.medicineName} - ${sale.sellerEmail}`, 20, 30 + index * 10);
      });
      doc.save('sales_report.pdf');
    };
  
    const handleExportDOCX = () => {
      // DOCX export logic (e.g., using docxtemplater)
    };
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching sales data</div>;
    return (
    <>
        <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Sales Report</h2>

      {/* Date Range Filter */}
      <div className="mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input input-bordered"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input input-bordered ml-2"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="table w-full">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Export Buttons */}
      <div className="mt-4 space-x-2">
        <button className="btn btn-primary" onClick={handleExportCSV}>
          Export CSV
        </button>
        <button className="btn btn-primary" onClick={handleExportXLSX}>
          Export XLSX
        </button>
        <button className="btn btn-primary" onClick={handleExportPDF}>
          Export PDF
        </button>
        <button className="btn btn-primary" onClick={handleExportDOCX}>
          Export DOCX
        </button>
      </div>
    </div>
    </>
    );
};

export default SalesReport;