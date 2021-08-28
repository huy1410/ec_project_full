import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import { deleteUser, fetchUser } from "../features/user/userSlice";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Home = () => {
  const user = useSelector((state) => state.user.data);
  console.log(user);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>FullName</TableCell>
              <TableCell align="right">Account</TableCell>
              <TableCell align="right">OnJob</TableCell>
              <TableCell align="right">Language</TableCell>
              <TableCell align="right">Skill</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.fullname}
                </TableCell>
                <TableCell align="right">{item.account}</TableCell>
                <TableCell align="right">{item.ob_day}</TableCell>
                <TableCell align="right">{item.language}</TableCell>
                <TableCell align="right">{item.technology.name}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="secondary" onClick={()=>dispatch(deleteUser(item.id))}>
                   Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Home;
