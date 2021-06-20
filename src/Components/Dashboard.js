import React, {Component} from 'react';
import Welcome from './visitor.png'
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super();
        this.state={
        studentlist:[],
         name:'',
         email:'',
         mobile:'',
         visit:'',
         message:'',
         employee:''
        }
    }  

    componentDidMount(){
        this.getContact();
    }

    processName = (obj) =>{
        this.setState({
            name: obj.target.value
        })
    }

    processEmail = (obj) =>{
        this.setState({
            email:obj.target.value
        })
    }

    processMobile = (obj) =>{
        this.setState({
            mobile:obj.target.value
        })
    }
       processVisit = (obj) =>{
        this.setState({
            visit:obj.target.value
        })
    }
    processEmp = (obj) =>{
        this.setState({
            employee:obj.target.value
        })
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            message:"Please Wait Processing...",
            studentlist:[]
        })
        const data = {
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          visit: this.state.visit,
          employee: this.state.employee,
         
        };
       
        
     

        axios
          .post("https://eduprov-api.herokuapp.com/api/visitor", data)
          .then(res => console.log(res))
          .catch(err => {
              this.setState({
                  message:err.message,
           
                })
               
          });
          window.location.href="/";
         
      };




    render(){
        return(
            <form className="post"   onSubmit={this.handleSubmit}>
                <div className="container mt-5">
             <div className="col-md-6"></div>    
             <div className="col-md-6">
                
            </div>    
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-success">EDUPROV</h4>
                    <label id="label" className="mt-2 text-danger">Visitor's Dashboard</label>
                </div>
               
                
                <div className="col-md-8 mt-4">
                    <div className="row">
                       <div className="col-md-5">
                           <div className="form-group">
                           
                               <input type="text" className="form-control mt-2" placeholder="Student Name"
                                value={this.state.name}
                                onChange={this.processName}
                               />
                           </div>
                       </div>
                       <div className="col-md-5">
                           <div className="form-group">
                             
                               <input type="text" className="form-control mt-2" placeholder="Mobile No"
                               value={this.state.mobile}
                               onChange={this.processMobile}
                               />
                           </div>
                       </div>
                       <div className="col-md-5 mt-3">
                           <div className="form-group">
                             
                               <input type="text" className="form-control  mt-2" placeholder="Purpose of visit"
                                value={this.state.visit}
                                onChange={this.processVisit}
                              />
                           </div>
                       </div>
                       <div className="col-md-5 mt-3">
                           <div className="form-group">
                             
                               <input type="email" className="form-control  mt-2" placeholder="Email ID"
                               value={this.state.email}
                               onChange={this.processEmail}
                               />
                           </div>
                       </div>
                       <div className="col-md-10 mt-3">
                           <div className="form-group">
                               <select className="form-control mt-2" id="dropdown"
                               
                               value={this.state.employee}
                               onChange={this.processEmp}>
                                   <option>Select counselor</option>
                                   <option>Ahmed Khan</option>
                                   <option>Shaik Rafiq</option>
                                   <option>Archana</option>
                                   <option>Vani</option>
                                   <option>Vaishnavi</option>
                                   <option>Sufiya</option>
                                   <option>Farzana</option>
                                   <option>Sunanya</option>
                                   <option>Tasmiya</option>
                                   <option>Uzma</option>
                               </select>
                           </div>
                       </div>
                   
                       <div className="col-md-12 mt-4">
                           <button className="btn btn-danger" type="submit"  >Submit</button>
                       </div>
                    </div>
                </div>
                <div className="col-md-4" id="image">
                <img  src={Welcome} className="img-fluid m-2"  alt="Welcome img"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <h3 className="text-center text-primary">Available Records:- {this.state.studentlist.length}</h3>
                <p className="text-center text-danger">{this.state.message}</p>
                    <table className="table table-bordered table-sm">
                        <thead>
                        <tr className="text-center bg-danger text-white">
                                    <th>Student Name</th>
                                    <th>Mobile</th>
                                    <th>E-mail</th>
                                    <th>Purpose of visit</th>
                                    <th>counselor Name</th>
                                    
                                </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.studentlist.map((row,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{row.name}</td>
                                                <td>{row.mobile}</td>
                                                <td>{row.email}</td>
                                                <td>{row.visit}</td>
                                                <td>{row.employee}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                    </table>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>


            </form>
            
        )
    }


}
export default Dashboard;