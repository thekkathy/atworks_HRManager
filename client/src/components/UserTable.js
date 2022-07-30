import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import Moment from "react-moment";

const UserTable = ({ rowData }) => {
  return (
    <div className="my-4">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Full Name</b></TableCell>
              <TableCell><b>Birth Date</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => {
              return (
                <TableRow>
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>
                    <Moment format="MMM D, YYYY" withTitle>{row.dateOfBirth}</Moment>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ textTransform: "capitalize" }}>
                      {row.userType}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => {console.log("update", row.id)}}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => {console.log("delete", row.id)}}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
