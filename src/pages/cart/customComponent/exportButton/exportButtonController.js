import React from "react";
import { connect } from 'react-redux';
import ExportButtonView from "./exportButton";
const ExportButtonController = (props) => (
    <ExportButtonView {...props} />
);
const mapStateToProps = (state) => ({
    filesId: state.cartReducer.filesId,
});

export default connect(mapStateToProps)(ExportButtonController);
