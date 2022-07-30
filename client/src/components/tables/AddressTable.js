import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddressFormModal from "../modals/AddressFormModal";

const AddressTable = ({ rowData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="mb-4">
        <Button
          variant="outlined"
          onClick={() => {
            handleOpen();
          }}
        >
          + Add Address
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Address Name</b>
              </TableCell>
              <TableCell>
                <b>Address Type</b>
              </TableCell>
              <TableCell>
                <b>Address</b>
              </TableCell>
              <TableCell>
                <b>Location</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => {
              return (
                <TableRow>
                  <TableCell>{row.addrName}</TableCell>
                  <TableCell>{row.addrType.toUpperCase()}</TableCell>
                  <TableCell>
                    {row.addrLn1}
                    {row.addrLn2.length && `, ${row.addrLn2}`}
                  </TableCell>
                  <TableCell>
                    {row.city}, {row.stateCode}, {row.country}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <AddressFormModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default AddressTable;
