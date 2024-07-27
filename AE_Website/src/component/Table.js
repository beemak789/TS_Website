import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
    fontWeightRegular: 100,
  },
});

const Table_Service = () => {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Evaluation Service</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows1.map((row, id) => (
          <TableRow key={id}>
            <TableCell width='25%'>{row.services}</TableCell>
            <TableCell width='60%'>{row.description}</TableCell>
            <TableCell width='20%'>{row.price}</TableCell>
          </TableRow>
        ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default Table_Service;
