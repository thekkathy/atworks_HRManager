const { Modal, Box, Typography, Button } = require("@mui/material");
const React = require("react");
const { modalBoxStyle } = require("../../styles/mdsStyles/mdsStyles");

const UserModal = ({open, handleClose, fullName=""}) => {
    return (<Modal
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
          Are you sure you want to delete "{fullName ? fullName : null}"?
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
    </Modal>)
  }

  export default UserModal;