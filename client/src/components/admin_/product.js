import React, { Component } from "react"
import axios from "axios"

class Product extends Component {
  axiosAPI = async () => {
    const products = axios.get("http://localhost:5000/platform/productRead")
    console.log(products.data)
  }
  componentDidMount() {
    this.axiosAPI()
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
                      <h3>상품관리</h3>
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

export default Product
