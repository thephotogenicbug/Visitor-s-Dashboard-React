import React, {Component} from 'react';
import axios from 'axios';
import Footer from './Footer'

class  Entires extends Component{
    constructor(){
        super();
        this.state={
        studentlist:[]
        }
    }  

    componentDidMount(){
        this.getContact();
    }


    getContact=()=>
    {
        
        let url="https://eduprov-api.herokuapp.com/api/visitor";
        axios.get(url).then(response=>{
            if(response.data.length>0)
            {
                this.setState({
                    studentlist:response.data
                   })
            }
          
        })
    }





    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <h3 className="text-danger mt-2">Visitor's Database</h3>
                    </div>
                
                    <div className="col-md-12 mt-2">
                        <table className='table table-lg table-bordered text-center '>
                            <thead className="bg-success text-white">
                               <tr>
                               <th>Student Name</th>
                                <th>Email ID</th>
                                <th>Mobile no</th>
                                <th>Purpose of visit</th>
                                <th>Counselor Name</th>
                                <th>Date</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                  this.state.studentlist.map((xstudent, index)=>{
                                      return(
                                          <tr key={index}>
                                              <td>{xstudent.name}</td>
                                              <td>{xstudent.email}</td>
                                              <td>{xstudent.mobile}</td>
                                              <td>{xstudent.visit}</td>
                                              <td>{xstudent.employee}</td>
                                              <td>{xstudent.date}</td>
                                          </tr>
                                      )
                                  })  
                                }
                            </tbody>
                        </table>
                    </div>
               
                   <div className="mt-5">
                       <Footer/>
                   </div>
                </div>

            </div>
            
        )
    }


}
export default Entires;