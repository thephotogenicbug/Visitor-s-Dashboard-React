import React, {Component} from 'react';
import Welcome from './visitor.png'
import Footer from './Footer'
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
          window.location.href='#/thankyou'
         
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
                       <div className="col-md-5 ">
                           <div className="mb-3">
                           
                               <input type="text" className="form-control mt-2" placeholder="Student Name"
                                value={this.state.name}
                                onChange={this.processName}
                                required
                               />
                           </div>
                       </div>
                       <div className="col-md-5">
                           <div className="mb-3">
                             
                               <input type="text" className="form-control mt-2" placeholder="Mobile No"
                               value={this.state.mobile}
                               onChange={this.processMobile}
                               required
                               />
                           </div>
                       </div>
                       <div className="col-md-5 ">
                           <div className="mb-3">
                             
                               <input type="text" className="form-control  mt-2" placeholder="Purpose of visit"
                                value={this.state.visit}
                                onChange={this.processVisit}
                                required
                              />
                           </div>
                       </div>
                       <div className="col-md-5 ">
                           <div className="mb-3">
                             
                               <input type="email" className="form-control  mt-2" placeholder="Email ID"
                               value={this.state.email}
                               onChange={this.processEmail}
                               required
                               />
                           </div>
                       </div>
                       <div className="col-md-10 ">
                           <div className="mb-3">
                               <select className="form-control mt-2" id="dropdown"
                               
                               value={this.state.employee}
                               onChange={this.processEmp}
                               required>
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
                       {this.state.message}
                    </div>
                </div>
                <div className="col-md-4" id="image">
                <img  src={Welcome} className="img-fluid m-2"  alt="Welcome img"/>
                </div>
              <div className="mt-5">
              <Footer/>
              </div>
            </div>
        </div>


            </form>
            
        )
    }


}
export default Dashboard;