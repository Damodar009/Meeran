

import React from 'react';

interface RowData {
  id: number;
  name: string;
  age: number;
  country: string;
  status: string;
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'country', headerName: 'Country', width: 150 },
  { field: 'status', headerName: 'Status', width: 120 },
];

const rows: RowData[] = [
  { id: 1, name: 'John Doe', age: 28, country: 'USA', status: 'Active' },
  { id: 2, name: 'Jane Smith', age: 32, country: 'Canada', status: 'Inactive' },
  // Add more rows as needed
];

interface CustomCellRendererProps {
  field: string;
  value: any;
}

const CustomCellRenderer: React.FC<CustomCellRendererProps> = ({ value, field }) => {
  let cellContent: React.ReactNode = value;

  if (field === 'status') {
    cellContent = (
      <span style={{ color: value === 'Active' ? 'green' : 'red' }}>
        {value}
      </span>
    );
  }

  return <div>{cellContent}</div>;
};

const Table: React.FC = () => {
  const renderCell = React.useCallback(
    (params: { field: string; value: any }) => (
      <CustomCellRenderer value={params.value} field={params.field} />
    ),
    []
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        columns={columns}
        rows={rows}
        components={{
          Toolbar: GridToolbar,
          Cell: renderCell,
        }}
        componentsProps={{
          toolbar: {
            exportAll: true,
          },
        }}
      /> */}
    </div>
  );
};

export default Table;
