import { Component } from 'react';
import Reserve_Moviegrid from './reserve_moviegrid';

class Step1 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selected_items : [

            ],
        }
    }

    componentDidUpdate(prevProps, _prevState) {
        if (prevProps.selected_items.length !== this.state.selected_items.length)
            this.props.getItems(this.state.selected_items);
    }

    render() {
        return (
            <div class="container">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <br /><br />
                <h3> Step.1 영화 선택</h3>
                <br /><br />
                    <Reserve_Moviegrid
                        data={this.props.data}
                        addItem={function(item){
                            var arr = this.state.selected_items;
                            arr.push(item);
                            this.setState({
                                selected_items : arr,
                            })
                        }.bind(this)}
                        removeItem={function(id_){
                            var arr = this.state.selected_items;
                            for (const item of arr) {
                                if (item.id === id_) {
                                    var idx = arr.indexOf(item)
                                    arr.splice(idx, 1);
                                    break;
                                }
                            }
                            this.setState({
                                selected_items : arr,
                            });
                        }.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default Step1;