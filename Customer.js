const customer = {
  template: `
        <div class="container-fluid mt-2">
            <div className="col-12 pr-0 text-center">
                <h1>Customer</h1>
                <p>This is the Customer component.</p>
            </div>

            <!-- Start customer form section -->
            <div className="col-12 d-flex justify-content-center align-item-center">
                <div className="col-6">
                    <form>
                        <div class="row">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input type="text" class="form-control" placeholder="Customer ID">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input type="text" class="form-control" placeholder="First name">
                            </div>
                            <div class="col-lg col-sm-12">
                                <input type="text" class="form-control" placeholder="Last name">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input type="text" class="form-control" placeholder="Mobile Number">
                            </div>
                            <div class="col-lg col-sm-12">
                                <textarea type="text" class="form-control" placeholder="Address"></textarea>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12">
                                <input type="button" class="btn btn-success col" value="register">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- End customer form section -->

            <!-- Start customer Table section -->
            <div className="col-12 d-flex justify-content-center align-item-center mt-3">
                <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">customer ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Address</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Madhusha Prasad</th>
                        <td>Madhusha</td>
                        <td>Prasad</td>
                        <td>0947148745</td>
                        <td>Kalutara South,Sri Lanka</td>
                        <td><i class="fa fa-trash text-danger"></i> &nbsp &nbsp <i class="fa fa-pencil-square-o text-primary"></i></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    `,
};
