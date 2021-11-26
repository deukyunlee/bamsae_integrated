import { render } from '@testing-library/react';
import React from 'react';

const CommonTableColumn = ({ children }) => {
 
  return (
    
    <td className="common-table-column"
    >
      {
        children
      }
    </td>
   
  )
}
 
export default CommonTableColumn;