import React from "react";
import propTypes from "prop-types";
import SweetAlert from "react-bootstrap-sweetalert";

const SweetAlertModal = ({
  children,
  title = "Are you sure?",
  confirmButtonText = "Ok",
  onConfirm,
  onCancel,
}) => {
  return (
    <SweetAlert
      title={title}
      warning
      showCancel
      confirmButtonText={confirmButtonText}
      confirmBtnBsStyle="success"
      cancelBtnBsStyle="danger"
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      {children}
    </SweetAlert>
  );
};
SweetAlertModal.propTypes = {
  children: propTypes.any,
  title: propTypes.string,
  confirmButtonText: propTypes.string,
  onConfirm: propTypes.any,
  onCancel: propTypes.any,
};
export default SweetAlertModal;
