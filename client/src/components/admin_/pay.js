import React, { Component } from "react"
import axios from "axios"

class Pay extends Component {
  getSalary = async () => {
    const salary = await axios.get("http://localhost:5000/emp/salary/dept?emp_dept='회계부'")
    console.log(salary.data.data)
  }
  componentDidMount() {
    this.getSalary()
  }
  render() {
    return (
      <div>
        <div class="tab-content">
          <div id="overview" class="tab active">
            <div class="row">
              <div class="col-md-8 col-sm-12 col-xs-12">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <h3>급여 관리</h3>
                      <div class="flex-wrap-movielist mv-grid-fw"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pay
