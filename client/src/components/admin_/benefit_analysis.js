import React, { Component } from "react"
import axios from "axios"
class Benefit_analysis extends Component {
  getIncome = async () => {
    const stastics = await axios.get("http://localhost:5000/company/income")
    console.log(stastics.data.data)
  }
  componentDidMount() {
    this.getIncome()
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
                      <h3>수익 분석</h3>
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

export default Benefit_analysis
