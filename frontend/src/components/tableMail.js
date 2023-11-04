/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../styles/body.css';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarExport,
} from '@mui/x-data-grid';

const TableMail = ({emails, setToEmails}) => {
  const columns = [
    { field: 'id', headerName: 'ID',width: 200 },
    { field: 'email', headerName: 'Email', width: 400},
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const handleRowSelection = (ids) => {
    const toEmails = []
    for (let i=0; i< ids.length; i++)
      toEmails.push(emails[ids[i]-1])
    setToEmails(toEmails);
 }

  return (
    <>
      <Box sx={{ height: '300px',width: "95%", marginLeft: "auto", marginRight: "auto", marginBottom: "20px" }}>
        <DataGrid
          rows={emails}
          columns={columns}
          pagination
          checkboxSelection
          components={{
            Toolbar: CustomToolbar,
          }}
          sx={{borderColor: "rgba(255, 99, 71,0.6)"}}
          onRowSelectionModelChange= {handleRowSelection}
        />
      </Box>
    </>
  );
};

export default TableMail;
