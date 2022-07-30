import { Modal, Box } from '@mui/material'
import React from 'react'
import { modalBoxStyle } from '../../styles/mdsStyles/mdsStyles'
import AddressForm from '../forms/AddressForm'

const AddressFormModal = ({open, handleClose, addMode=true}) => {
  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalBoxStyle}>
            {addMode ? <AddressForm handleClose={handleClose} addMode={addMode}/> : null}
        </Box>
      </Modal>
    </>
  )
}

export default AddressFormModal