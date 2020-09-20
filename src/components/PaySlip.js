import React, { Component } from "react";
import PDF from "./PDF";

class PaySlip extends Component {
  state = {
    compName: "Maritime Outlets Inc",
    compAddress1: "1480 Fall River Road Unit#207",
    compAddress2: "Fall River, NS B2T1J1",
    compAddress3: "",
    empName: "Mahima Chachra",
    empId: "224",
    empAddress1: "36 Transom Dr",
    empAddress2: "Halifax, NS",
    empAddress3: "B3M 4V6",
    payPeriod: "Jul 16th - 31st (2020)",
    payDate: "Aug 1st 2020",
    workedHours: 0,
    amountPerHour: 0,
    cppDeduction: 0,
    eiDeduction: 0,
    itDeduction: 0,
    infoSubmitted: false,
    thisPeriod: 0,
    yearToDate: 0,
    currentTotalDeduction: 0,
    yearToDateDeduction: 0,
    currentTotalAfterDeduction: 0,
    yearToDateAfterDeduction: 0,
  };

  onValChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  onSubmit = (e) => {
    if (
      !this.state.compName ||
      !this.state.compAddress1 ||
      !this.state.compAddress2 ||
      !this.state.empName ||
      !this.state.empId ||
      !this.state.empAddress1 ||
      !this.state.empAddress2 ||
      !this.state.payPeriod ||
      !this.state.payDate ||
      !this.state.amountPerHour ||
      !this.state.workedHours ||
      !this.state.cppDeduction ||
      !this.state.eiDeduction ||
      !this.state.itDeduction
    ) {
      alert("Please Provide Mandatory Information");
      e.preventDefault();
    } else {
      const income = this.state.workedHours * this.state.amountPerHour;
      this.setState({
        thisPeriod: income,
        yearToDate: income,
      });
      const additiveDeduction =
        +this.state.cppDeduction +
        +this.state.eiDeduction +
        +this.state.itDeduction;
      const fixedAdditiveDeduction = additiveDeduction.toFixed(2);
      this.setState({
        currentTotalDeduction: fixedAdditiveDeduction,
        yearToDateDeduction: fixedAdditiveDeduction,
      });
      const totalAfterDeduction = income - additiveDeduction;
      const fixedTotalAfterDeduction = totalAfterDeduction.toFixed(2);

      this.setState({
        currentTotalAfterDeduction: fixedTotalAfterDeduction,
        yearToDateAfterDeduction: fixedTotalAfterDeduction,
      });
      this.setState({
        infoSubmitted: true,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.infoSubmitted === true ? (
          <div className="container">
            <div className="jumbotron mt-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="well well-sm">
                    <form className="from-horizontal" method="post">
                      <fieldset>
                        <legend className="text-center header">
                          Add Details
                        </legend>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("compName")}
                            name="title"
                            type="text"
                            placeholder="Enter Company Name"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("compAddress1")}
                            name="title"
                            type="text"
                            placeholder="Enter Company Address (Line 1)"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("compAddress2")}
                            name="title"
                            type="text"
                            placeholder="Enter Company Address (Line 2)"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("compAddress3")}
                            name="title"
                            type="text"
                            placeholder="Enter Company Address (Line 3) (optional)"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("empName")}
                            name="title"
                            type="text"
                            placeholder="Enter Employee Name"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("empId")}
                            name="title"
                            type="text"
                            placeholder="Enter Employee ID"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("empAddress1")}
                            name="title"
                            type="text"
                            placeholder="Enter Employee Address(Line 1)"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("empAddress2")}
                            name="title"
                            type="text"
                            placeholder="Enter Employee Address(Line 2)"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("empAddress3")}
                            name="title"
                            type="text"
                            placeholder="Enter Employee Address(Line 3) (optional)"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("payPeriod")}
                            name="title"
                            type="text"
                            placeholder="Enter Pay Period"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("payDate")}
                            name="title"
                            type="text"
                            placeholder="Enter Pay Date"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("workedHours")}
                            name="title"
                            type="number"
                            placeholder="Enter Number of Worked Hours"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("amountPerHour")}
                            name="title"
                            type="number"
                            placeholder="Enter Number of Amount per Hour"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("cppDeduction")}
                            name="title"
                            type="number"
                            placeholder="Enter CPP"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("eiDeduction")}
                            name="title"
                            type="number"
                            placeholder="Enter EI"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onValChange("itDeduction")}
                            name="title"
                            type="number"
                            placeholder="Enter Income Tax"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <button
                            onClick={this.onSubmit}
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Generate Pay Structure
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <PDF info={this.state} />
        )}
      </>
    );
  }
}

export default PaySlip;
