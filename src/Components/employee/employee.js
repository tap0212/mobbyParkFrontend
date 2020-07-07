import React, {useEffect} from 'react'
import Navbar from '../Navbar/navbar'
import AddEmployee from '../AddEmployeeModal/addEmployee';
import { Modal } from 'react-responsive-modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {GetAllEmployees} from '../../APICalls/employee';
import {Table} from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
function Employee() {
    const classes = useStyles();

    const [openModal, setOpenModal] = React.useState(false)
    const [allEmployees, setAllEmployees] = React.useState("")

    useEffect(() => {
      const operatorToken = JSON.parse(localStorage.getItem("jwt")).token
      GetAllEmployees(operatorToken)
        .then(res => {
          console.log(res)
          setAllEmployees(res)
        })
        .catch(err => console.log(err))
    }, [openModal])
    
    const onOpenModal = () => {
        setOpenModal(true );
      };
     
     const onCloseModal = () => {
        setOpenModal(false);
      };
    
    return (
        <div className={classes.root}>
            <Navbar />
            <div style={{marginLeft:"280px", marginTop:"80px"}}>
                <h1 style={{textAlign:"center"}}>Employee Management</h1>
                <Button onClick={onOpenModal} style={{float:"right", marginRight:"10vw", marginTop:"5vh"}} variant="contained" color="primary">
                    Add Employee
                </Button>

                <div className="weekend">
                <Table style={{marginTop: "20px", width:"80%", marginLeft:"10%"}} responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          allEmployees && 
                          allEmployees.map((e, i) => {
                            return(
                              <tr>
                                <td>{i+1}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                              </tr>
                            )
                          })
                        }

                       
                    </tbody>
                    </Table>
              </div>
            </div>

               






                 {/* Add Employee Modal */}

            <Modal open={openModal} onClose={onCloseModal} center>
                <AddEmployee setOpenModal={setOpenModal} onCloseModal={onCloseModal} />
            </Modal>
        </div>
    )
}

export default Employee
