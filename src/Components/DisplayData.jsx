import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function DisplayData({ datas }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell align="right"><strong>City</strong></TableCell>
            <TableCell align="right"><strong>Country</strong></TableCell>
            <TableCell align="right"><strong>Card Number</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <TableRow
              key={data.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${data.firstName} ${data.lastName}`}
              </TableCell>
              <TableCell >{data.email}</TableCell>
              <TableCell align="right">{data.city}</TableCell>
              <TableCell align="right">{data.country}</TableCell>
              <TableCell align="right">{data.cardNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}