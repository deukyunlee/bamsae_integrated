import React, { Component } from "react"
import axios from "axios"
import Product_table from './product_table';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Product extends Component {
  axiosAPI = async () => {
    const products = axios.get("http://localhost:5000/platform/productRead")
    console.log(products.data)
  }
  componentDidMount() {
    this.axiosAPI()
  }
  render() {
    const stylebtn = {
       width: '50px',
       float: 'right',
   }
   const stylebtn2 = {
       width: '50px',
       float: 'right',
       marginRight: '20px'
   }
   const product = [
       {
           'id': 1,
           'sorting': '팝콘/음료',
           'name': '싱글콤보',
           'price': '9000원',
           
       }, {
           'id': 2,
           'sorting': '팝콘/음료',
           'name': '더블콤보',
           'price': '12000원',
       }, {
           'id': 3,
           'sorting': '관람권',
           'name': '일반제목',
           'price': '11000원'
       }, {
           'id': 4,
           'sorting': '관람권',
           'name': '일반관람권1+1',
           'price': '22000원'
       },
       {
           'id': 5,
           'sorting': '상품',
           'name': '싱글패키지',
           'price': '18000원'
       },
       {
           'id': 6,
           'sorting': '상품',
           'name': '더블패키지',
           'price': '22000원'
       },
       {
           'id': 7,
           'sorting': '상품',
           'name': '패밀리패키지',
           'price': '30000원'
       },
   ]
   return (
       <div>
           <div class="tab-content">
               <div id="overview" class="tab active">
                   <div class="row">
                       <div class="col-md-8 col-sm-12 col-xs-12">
                           <div class="container">
                               <div class="row">
                                   <div class="col-md-12 col-sm-12 col-xs-12">
                                       <h3>상품 관리</h3>
                                       <div class="flex-wrap-movielist mv-grid-fw"></div>
                                   </div>
                               </div>
                           </div>
                       </div>
                      <button style={stylebtn2}>삭제</button>
                      <button style={stylebtn}>추가</button>
                   </div>
                   <br />
                   <Table>
                       <TableHead>
                           <TableRow>
                               <TableCell
                                   style={{
                                       width: 50,
                                       textAlign: "center"
                                   }}>번호</TableCell>
                                   <TableCell
                                   style={{
                                       width: 50,
                                       textAlign: "center"
                                   }}>분류</TableCell>
                               <TableCell
                                   style={{
                                       width: 700,
                                       textAlign: "center"
                                   }}>상품명</TableCell>
                               <TableCell
                                   style={{
                                       width: 200,
                                       textAlign: "center"
                                   }}
                                   >가격</TableCell>
                           </TableRow>
                       </TableHead>
                       <TableBody>
                           {
                               product.map(c => {
                                   return <Product_table
                                       key={c.id}
                                       id={c.id}
                                       sorting={c.sorting}
                                       name={c.name}
                                       price={c.price}
                                       onChangeDetail={this.props.onChangeDetail}
                                       getData={function () {
                                           this
                                               .props
                                               .upData(product);
                                       }.bind(this)}/>
                               })
                           }
                       </TableBody>
                   </Table>
               </div>
           </div>

       </div>
   );
}
}

export default Product
