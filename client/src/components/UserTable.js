import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Modal,
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
import { modalBoxStyle } from "../styles/mdsStyles/mdsStyles";

const UserTable = ({ rowData }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };
  const navigate = useNavigate();
  return (
    <div className="my-4">
      <Card>
        <CardContent>
          <div className="d-flex justify-content-end my-2">
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
                {rowData.map((row) => {
                  return (
                    <TableRow>
                      <TableCell>{row.fullName}</TableCell>
                      <TableCell>
                        <Moment format="MMM D, YYYY" withTitle>
                          {row.dateOfBirth}
                        </Moment>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ textTransform: "capitalize" }}>
                          {row.userType}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            console.log("update", row.id);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            console.log("open modal delete", row.id);
                            handleOpen();
                          }}
                        >
                          <DeleteIcon />
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={modalBoxStyle}>
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                sx={{ marginBottom: "0.5rem" }}
                              >
                                Are you sure you want to delete {row.fullName}?
                              </Typography>
                              <Button variant="outlined" onClick={handleClose}>
                                Cancel
                              </Button>
                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => {
                                  handleClose();
                                  console.log(open);
                                }}
                                sx={{ marginLeft: "0.5rem" }}
                              >
                                Yes
                              </Button>
                            </Box>
                          </Modal>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserTable;
