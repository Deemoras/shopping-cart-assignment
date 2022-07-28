import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import prodImg from "../../static/images/products/fruit-n-veg/kiwi-green.jpg";
import "./CartStyle.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    props.closeDialog(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.openDialog ? props.openDialog : open}
        className="cart-container-box"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          className="cart-title-style"
        >
          My Cart
        </BootstrapDialogTitle>
        <DialogContent dividers className="cart-content-style">
          <Typography gutterBottom className="cart-items-list-style">
            <div className="cart-item-content">
              <div className="cart-item-img">
                <img src={prodImg} alt="logo" height={80} width={80} />
              </div>
              <div className="cart-item-details">
                <h3>Apple-Washington, Regular, 4pcs</h3>

                <div className="cart-item-add-remove-section">
                  <div className="cart-item-add-remove">
                    <IconButton aria-label="add">
                      <AddIcon />
                    </IconButton>
                    <p>1</p>
                    <IconButton aria-label="remove">
                      <RemoveIcon />
                    </IconButton>
                    <p>X Rs. 23</p>
                  </div>
                  <div className="item-total-value">
                    <p>Rs. 23</p>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
