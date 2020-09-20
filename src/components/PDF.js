import React from "react";
import Pdf from "react-to-pdf";
import * as ReactBootStrap from "react-bootstrap";
const ref = React.createRef();

const PDF = (props) => {
  const {
    amountPerHour = 0,
    compAddress1 = "1480 Fall River Road Unit#207",
    compAddress2 = "Fall River, NS B2T1J1",
    compAddress3 = "",
    compName = "Maritime Outlets Inc",
    cppDeduction = 0,
    currentTotalAfterDeduction = 0,
    currentTotalDeduction = 0,
    eiDeduction = 0,
    empAddress1 = "Employee ID: 224",
    empAddress2 = "36 Transom Dr",
    empAddress3 = "Halifax, NS",
    empId = "",
    empName = "Mahima Chachra",
    itDeduction = 0,
    payDate = "Aug 1st 2020",
    payPeriod = "Jul 16th - 31st (2020)",
    thisPeriod = 0,
    workedHours = 0,
    yearToDate = 0,
    yearToDateAfterDeduction = 0,
    yearToDateDeduction = 0,
    variablePay1 = 0,
    variablePay2 = 0,
    totalGrossThisPeriod = 0,
    totalGrossYearToDate = 0,
  } = props.info;
  const RegularsalaryInfo = ` Regular (${workedHours} hrs @${amountPerHour}).`
  return (
    <>
      <div className="PaySlip" ref={ref}>
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr className="noBorder">
              <th style={{ padding: "0.4rem" }}>{compName}</th>
              <th style={{ "text-align": "right", padding: "0.4rem" }}>
                {empName}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="noBorder">
              <td style={{ padding: "0.4rem", fontSize: "0.8rem" }}>
                {compAddress1}
              </td>
              <td style={{ "text-align": "right", padding: "0.4rem" }}>
                {"Employee ID : " + empId}
              </td>
            </tr>
            <tr class="noBorder">
              <td style={{ padding: "0.4rem", fontSize: "0.8rem" }}>
                {compAddress2}
              </td>
              <td
                style={{
                  "text-align": "right",
                  padding: "0.4rem",
                  fontSize: "0.8rem",
                }}
              >
                {empAddress1}
              </td>
            </tr>

            <tr class="noBorder">
              <td style={{ padding: "0.4rem", fontSize: "0.8rem" }}>
                {compAddress3}
              </td>
              <td
                style={{
                  "text-align": "right",
                  padding: "0.4rem",
                  fontSize: "0.8rem",
                }}
              >
                {empAddress2}
              </td>
            </tr>
            <tr class="noBorder">
              <td></td>
              <td
                style={{
                  "text-align": "right",
                  padding: "0.4rem",
                  fontSize: "0.8rem",
                }}
              >
                {empAddress3}
              </td>
            </tr>

            <tr
              class="noBorder"
              style={{ backgroundColor: "rgb(204, 204, 204)" }}
            >
              <td>{" Pay Period : " + payPeriod}</td>
              <td style={{ "text-align": "right" }}>
                {" Pay Date : " + payDate}
              </td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
        <ReactBootStrap.Table striped bordered hover>
          <thead class="noBorder">
            <tr >
              <th>Income</th>
              <th>This Period</th>
              <th>Year to Date</th>
              <th>Deductions</th>
              <th>Current Total</th>
              <th>Year to Date</th>
            </tr>
          </thead>
          <tbody>
            <tr class="noBorder">
              <td>{RegularsalaryInfo}</td>
              <td>{thisPeriod}</td>
              <td>{thisPeriod}</td>
              <td>CPP</td>
              <td>{cppDeduction}</td>
              <td>{cppDeduction}</td>
            </tr>
            <tr class="noBorder">
              <td>Variable Pay 1</td>
              <td>{variablePay1}</td>
              <td>{variablePay1}</td>
              <td>EI</td>
              <td>{eiDeduction}</td>
              <td>{eiDeduction}</td>
            </tr>
            <tr class="noBorder">
            <td>Variable Pay 2</td>
              <td>{variablePay2}</td>
              <td>{variablePay2}</td>
           
              <td>Income Tax</td>
              <td>{itDeduction}</td>
              <td>{itDeduction}</td>
            </tr>
            <tr class="noBorder" style={{ "font-weight": "bold" }}>
              <td colSpan="3"></td>
              <td>Total Deductions</td>
              <td>{currentTotalDeduction}</td>
              <td>{yearToDateDeduction}</td>
            </tr>
            <tr class="noBorder" style={{ "font-weight": "bold" }}>
              <td>Total Gross</td>
              <td>{totalGrossThisPeriod}</td>
              <td>{totalGrossYearToDate}</td>
              <td>Total Net</td>
              <td>{currentTotalAfterDeduction}</td>
              <td>{yearToDateAfterDeduction}</td>
            </tr>
            <tr class="noBorder"
              style={{
                "font-weight": "bold",
                backgroundColor: "rgb(204, 204, 204)",
              }}
            >
              <td colSpan="3"></td>
              <td>Current Period Net income</td>
              <td colSpan="1"></td>
              <td>{yearToDateAfterDeduction}</td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
      </div>
      <div className="PaySlip">
        <Pdf targetRef={ref} filename= {empName +"paystub.pdf"}>
          {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
        </Pdf>
      </div>
    </>
  );
};
export default PDF;
