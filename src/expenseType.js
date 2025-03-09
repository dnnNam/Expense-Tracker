import PropTypes from "prop-types";

export const propsTypeFilter = PropTypes.shape({
  onFilterChange: PropTypes.func.isRequired,
});

export const propsTypeList = PropTypes.shape({
  transactions: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
});

export const propsTypeForm = PropTypes.shape({
  handleSubmit: PropTypes.func.isRequired,
});

export const propsTypeItem = PropTypes.shape({
  deleteFunc: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired,
});

export const propsTypeHeader = PropTypes.shape({
  transactions: PropTypes.func.isRequired,
});
