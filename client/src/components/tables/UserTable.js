import {
  Button,
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
import React, { useState } from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router";
import UserModal from "../modals/UserModal";

const UserTable = ({ rowData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedUser, setselectedUser] = useState(0);

  const navigate = useNavigate();
  return (
    <>
      <div className="my-4">
        <Button
          variant="outlined"
          onClick={() => {
            navigate("addUser");
          }}
        >
          + Add User
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Full Name</b>
              </TableCell>
              <TableCell>
                <b>Birth Date</b>
              </TableCell>
              <TableCell>
                <b>Type</b>
              </TableCell>
              <TableCell>
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData &&
              rowData.map((row, idx) => {
                return (
                  <TableRow>
                    <TableCell>{rowData && row.fullName}</TableCell>
                    <TableCell>
                      <Moment format="MMM D, YYYY" withTitle>
                        {rowData && row.dateOfBirth}
                      </Moment>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ textTransform: "capitalize" }}>
                        {rowData && row.userType}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          console.log("update", row.id);
                          setselectedUser(idx);
                          navigate(`${row.id}`);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          console.log("open modal delete", idx);
                          setselectedUser(idx);
                          handleOpen();
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <UserModal
                        open={open}
                        handleClose={handleClose}
                        fullName={rowData ? rowData[selectedUser].fullName : ""}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
