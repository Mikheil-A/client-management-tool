import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Grid.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';


const Grid = (props) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small">

          <TableHead>
            <TableRow>
              <TableCell align="left">Profile image</TableCell>
              <TableCell align="left">PID</TableCell>
              <TableCell align="left">first name</TableCell>
              <TableCell align="left">last name</TableCell>
              <TableCell align="left">gender</TableCell>
              <TableCell align="left">phone</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.data.map(row => (
              <TableRow key={row.id} hover>
                <TableCell align="left">
                  <img id="profile_image" alt="profile photo" src={row.photo}/>
                </TableCell>
                <TableCell align="left">{row.pid}</TableCell>
                <TableCell align="left">{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">{row.gender}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="right">
                  <div id="action-icons">
                    <IconButton color="primary" component="span" onClick={() => props.onDriverOpen(row)}>
                      <VisibilityIcon fontSize="small"/>
                    </IconButton>
                    <IconButton color="primary" component="span" onClick={() => props.onEditClientDialogOpen(row, false)}>
                      <EditIcon fontSize="small"/>
                    </IconButton>
                    <IconButton color="primary" component="span" onClick={() => props.onConfirmDeletionDialogOpen(row, true)}>
                      <DeleteIcon fontSize="small"/>
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
};

export default Grid;
