import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function MarkUpAmount() {
  const reducerState = useSelector((state) => state);

  // Table data to be rendered
  const tableData = reducerState?.userTableData?.userData?.data?.data;

  return (
    <TableContainer
      style={{ width: "90%" }}
      sx={{ marginTop: "15%", marginLeft: "10%", overflowY: "scroll" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">User ID</StyledTableCell>
            <StyledTableCell align="right">Flight Markup</StyledTableCell>
            <StyledTableCell align="right">Hotel Markup</StyledTableCell>
            <StyledTableCell align="right">Holiday Markup</StyledTableCell>
            <StyledTableCell align="right">Bus Markup</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.markup.hotel ? row.markup.hotel : "0"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.markup.hotel ? row.markup.hotel : "0"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.markup.holiday ? row.markup.holiday : "0"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.markup.bus ? row.markup.bus : "0"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
