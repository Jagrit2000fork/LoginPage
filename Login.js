import React from 'react'
import pic from './undraw_login_re_4vu2 (1).svg'
import  './style.css'
function Login() {
  return (
    <div>
      {/* <h1>hey</h1> */}
        <section className='Form my-4 mx-5'>
            <div className='container'>
              <div className='row py-5'>
                <div className='col-lg-5 '>
                  <img src={pic} 
                  className='img-fluid ' alt='image'/>
                </div>
                <div className='col-lg-7 px-5 pt-5'>
                  <h1 className='font-weight-bold py-3'>Hey</h1>
                  <h4>Sign Into Your Account</h4>

                  <form>
                    <div className='form-row'>
                      <div className='col-lg-7'>
                        <input type="text" placeholder='Email' className='form-control shadow-none my-3'></input>
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='col-lg-7'>
                        <input type="Password" placeholder='Password' className='form-control shadow-none'></input>
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='col-lg-7'>
                      <button type="button" class="btn btn-primary mt-3 mb-3 glow-on-hover">Login</button>
                      
                      </div>
                    </div>
                    <a href='#' style={{textDecoration: "none"}}>Forgot Password</a>
                    <p>Don't Have An Account ? <a style={{textDecoration: "none"}} href='#'>Register Here</a></p>
                  </form>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Login