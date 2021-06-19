import React, {Component} from 'react';
import Welcome from './visitor.png'

class Dashboard extends Component{



    render(){
        return(
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
                               />
                           </div>
                       </div>
                       <div className="col-md-5">
                           <div className="form-group">
                             
                               <input type="text" className="form-control mt-2" placeholder="Mobile No"
                              
                               />
                           </div>
                       </div>
                       <div className="col-md-5 mt-3">
                           <div className="form-group">
                             
                               <input type="text" className="form-control  mt-2" placeholder="Purpose of visit"
                              />
                           </div>
                       </div>
                       <div className="col-md-5 mt-3">
                           <div className="form-group">
                             
                               <input type="email" className="form-control  mt-2" placeholder="Email ID"
                               />
                           </div>
                       </div>
                       <div className="col-md-10 mt-3">
                           <div className="form-group">
                               <select className="form-control mt-2" id="dropdown">
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
                           <button className="btn btn-danger" >Submit</button>
                       </div>
                    </div>
                </div>
                <div className="col-md-4" id="image">
                <img  src={Welcome} className="img-fluid m-2"  alt="Welcome img"/>
                </div>
            </div>
        </div>
        )
    }


}
export default Dashboard;