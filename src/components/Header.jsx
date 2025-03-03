import React from "react";
import PropTypes from "prop-types";

// có nhiệm vụ hiển thị tổng số dư , thu nhập và chi tiêu

Header.propTypes = {
  transaction: PropTypes.func,
};

Header.defaultProps = {
  transaction: [],
};

function Header(props) {
  return <div></div>;
}

export default Header;
