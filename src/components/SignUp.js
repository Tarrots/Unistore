import React from 'react'

function SignUp() {
    return (
        <div>
  <hr className="offset-lg hidden-xs" />
  <hr className="offset-md" />
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
        <h1 className="align-center">New Customer</h1>
        <br />
        <form className="join" action="index.php" method="post">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <input type="text" name="name" defaultValue placeholder="First Name" required className="form-control" /><br />
              </div>
              <div className="col-sm-12">
                <input type="text" name="phone" defaultValue placeholder="Phone" required className="form-control" /><br />
              </div>
              <div className="col-sm-12">
                <input type="email" name="email" defaultValue placeholder="E-mail" required className="form-control" /><br />
              </div>
              <div className="col-sm-12">
                <input type="password" name="password" defaultValue placeholder="Password" required className="form-control" /><br />
              </div>
              <div className="col-sm-12">
                <input type="password" name="password-confirm" defaultValue placeholder="Confirm Password" required className="form-control" /><br />
              </div>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Join free</button>
          <a href={this} className="xs-margin">Terms &gt;</a>
          <br /><br />
          <p>
            By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
          </p>
        </form>
        <br className="hidden-sm hidden-md hidden-lg" />
      </div>
    </div>
  </div>
  <br /><br />
  <hr className="hidden-xs" />
  <br className="hidden-xs" />
  <br className="hidden-xs" />
</div>
    )
}

export default SignUp
