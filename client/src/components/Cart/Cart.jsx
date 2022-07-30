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
  const open = false

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
        {props.cartItemList && props.cartItemList.length>0 ? props.cartItemList.map((item,i)=>{
          return (
            <DialogContent dividers className="cart-content-style" key={i}>
            <Typography gutterBottom className="cart-items-list-style">
              <div className="cart-item-content">
                <div className="cart-item-img">
                  <img src={item.imageURL} alt="logo" height={80} width={80} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
  
                  <div className="cart-item-add-remove-section">
                    <div className="cart-item-add-remove">
                      <IconButton aria-label="add" onClick={()=>props.incrementClick(item,i)}>
                        <AddIcon />
                      </IconButton>
                      <div>{item.quantity}</div>
                      <IconButton aria-label="remove" onClick={()=>props.decreamentClick(item,i)}>
                        <RemoveIcon />
                      </IconButton>
                      <div>X {item.unitPrice}</div>
                    </div>
                    <div className="item-total-value">
                      <div>Rs. {item.totalItemPrice}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Typography>
          </DialogContent>
          ) 
        }): <div>Add Items to Cart</div>}
        <div>
          {props.cartItemList && props.cartItemList.length>0 && <Button className='text-field-style bottom-style' onClick={props.proceedToCheckout}>Proceed to Checkout</Button>}
          {props.cartItemList && props.cartItemList.length>0 && props.totalPrice}
        </div>
      </BootstrapDialog>
    </div>
  );
}