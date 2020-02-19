import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import './GridHeader.scss';


const GridHeader = (props) => {
  return (
    <div className="grid-header">
      <Tooltip title="Add Client" aria-label="add">
        <Fab color="primary" size="medium">
          <AddIcon fontSize="large" onClick={props.onDialogOpen}/>
        </Fab>
      </Tooltip>
    </div>
  );
};

export default GridHeader;
