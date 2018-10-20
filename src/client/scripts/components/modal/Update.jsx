import PropTypes from "prop-types";
import {CreateModal, styles} from "./Create";
import { withStyles } from "@material-ui/core/styles";

class UpdateModal extends CreateModal {
    constructor(props) {
        super(props);

        this.state = {
            title: props.element.title,
            descriptions: props.element.descriptions
        };
    } 
}

UpdateModal.propTypes = {
    element: PropTypes.object
}

export default withStyles(styles)(UpdateModal);