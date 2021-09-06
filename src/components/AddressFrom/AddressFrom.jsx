import React from 'react'
import AddressFromName from './AddressFromName'
import './AddressFrom.css'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";

export default function AddressFrom() {
    const history = useHistory();

   const onSubmitHandler = (e) => {
        e.preventDefault();
        history.push('/bill')
      }

    return (
        <div className="address__from my-5">
            <div className="container">
               <div className="mb-4">
                 <AddressFromName/>
               </div>
             <div className="shadow-sm p-5 mb-5 bg-body rounded custom__filed">
             <div className="custom__before__filed"></div>
               <form className="row g-3" onSubmit={onSubmitHandler}>
                    <div className="col-md-4">
                        <label for="name" className="form-label">Name*</label>
                        <input type="text" className="form-control" id="name" placeholder="Jhone" required />
                    </div>
                    <div className="col-md-4">
                        <label for="email" className="form-label">Email*</label>
                        <input type="email" className="form-control" id="email" placeholder="abc@xyz.com" required/>
                    </div>
                    <div className="col-md-4">
                        <label for="phone" className="form-label">Phone*</label>
                        <input type="text" className="form-control" id="phone" placeholder="eg 98 788 2122" required/>
                    </div>
                    <div className="col-md-4">
                        <label for="city" className="form-label">City*</label>
                        <input type="text" className="form-control" id="city" placeholder="City" required/>
                    </div>
                    <div className="col-md-4">
                        <label for="areas" className="form-label">Areas*</label>
                        <input type="text" className="form-control" id="areas" placeholder="Area" required/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address*</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <div className="">
                          <Link to="/" type="button" className="btn btn-danger px-5">Back</Link>
                          <button  type="submit"  className="btn btn-success px-5 ml-md-4 ml-0 mt-md-0 mt-3">Next</button>
                        </div>
                    </div>
               </form>
               </div>
            </div>    
        </div>
    )
}
