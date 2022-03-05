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
                    <form id="customerForm">
                        <div class="row">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input v-model="customerID" type="text" class="form-control" placeholder="Customer ID">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input v-model="firstName" type="text" class="form-control" placeholder="First name">
                            </div>
                            <div class="col-lg col-sm-12">
                                <input v-model="lastName" type="text" class="form-control" placeholder="Last name">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input v-model="mobileNumber" type="text" class="form-control" placeholder="Mobile Number">
                            </div>
                            <div class="col-lg col-sm-12">
                                <textarea v-model="address" class="form-control" placeholder="Address"></textarea>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12">
                                <input :class="clickEditButton ? 'btn btn-primary col' : 'btn btn-success col'" :value="clickEditButton ? 'Update Customer':'Register'" @click="submitForm">
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
                    <tr v-for="(customer,index) in customerDetails" :key="index">
                        <th scope="row">{{customer.customerID}}</th>
                        <td>{{customer.firstName}}</td>
                        <td>{{customer.lastName}}</td>
                        <td>{{customer.mobileNumber}}</td>
                        <td>{{customer.address}}</td>
                        <td><i class="fa fa-trash text-danger btn" @click="deleteCustomer(index)"></i> &nbsp &nbsp 
                        <i class="fa fa-pencil-square-o text-primary btn" @click="editCustomer(index)"></i></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    `,

  data() {
    return {
      customerID: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      address: '',
      customerDetails: [
        {
          customerID: 'CM001',
          firstName: 'Madhusha',
          lastName: 'Prasad',
          mobileNumber: '0947148745',
          address: 'Kalutara South,Sri Lanka',
        },
        {
          customerID: 'CM001',
          firstName: 'Madhusha',
          lastName: 'Prasad',
          mobileNumber: '0947148745',
          address: 'Kalutara South,Sri Lanka',
        },
      ],
      loading: false,
      submit: false,
      clickEditButton: false,
      selectedCustomerRowID: null,
    };
  },
  methods: {
    //submit customer form
    submitForm() {
      //check if the customer click the edit button
      if (this.clickEditButton) {
        this.updateCustomer();
      } else {
        const customer = {
          customerID: this.customerID,
          firstName: this.firstName,
          lastName: this.lastName,
          mobileNumber: this.mobileNumber,
          address: this.address,
        };

        this.customerDetails.push(customer);
        this.clearCustomerForm();
      }
    },

    //clear customer form
    clearCustomerForm() {
      this.customerID = '';
      this.firstName = '';
      this.lastName = '';
      this.mobileNumber = '';
      this.address = '';
    },

    //edit customer
    editCustomer(customerID) {
      if (
        customerID !== '' ||
        customerID !== undefined ||
        customerID !== null
      ) {
        const selectedCustomer = this.customerDetails[customerID];
        this.customerID = selectedCustomer.customerID;
        this.firstName = selectedCustomer.firstName;
        this.lastName = selectedCustomer.lastName;
        this.mobileNumber = selectedCustomer.mobileNumber;
        this.address = selectedCustomer.address;
        this.clickEditButton = true;
        this.selectedCustomerRowID = customerID;
      }
    },

    //update customer
    updateCustomer() {
      const customer = {
        customerID: this.customerID,
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        address: this.address,
      };

      this.customerDetails[this.selectedCustomerRowID] = customer;
      this.clearCustomerForm();
      this.clickEditButton = false;
    },

    //delete customer
    deleteCustomer(customerID) {
      //remove selected customer from the array
      this.customerDetails.splice(customerID, 1);
    },
  },
};
