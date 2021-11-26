import React, { Component } from 'react';
import Eventimage from './Eventimage';

class Event extends Component {
    render() {
      return (
        <div class="event-layout">
        <div class="title-hd">
			<h2>이벤트</h2>
      <a href="#" class="viewall">View all <i class="ion-ios-arrow-right"></i></a>
        </div>
        <div class="tabs">
            <div class="event-table">
                <table class="t" border="1">
                <th>
                  <a href="#tab1">#영화</a>
                </th>
                <th>
                  <a href="#tab2"> #스토어</a>
                </th>
                <tr>
                    <td>
                      <Eventimage></Eventimage>
                    </td>
                    <td>
                      <Eventimage></Eventimage>
                    </td>
                </tr>
                <tr>
                    <td>
                      <Eventimage></Eventimage>
                    </td>
                    <td>
                      <Eventimage></Eventimage>
                    </td>
                </tr>
                </table>
            </div>
        </div>
        </div>
      )
    }
  }

export default Event;