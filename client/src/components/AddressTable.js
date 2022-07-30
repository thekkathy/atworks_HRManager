import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
  Modal,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import AddAddressForm from "../forms/address/AddAddressForm";
import { modalBoxStyle } from "../styles/mdsStyles/mdsStyles";

const AddressTable = ({ rowData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalBoxStyle}>
            <AddAddressForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default AddressTable;
