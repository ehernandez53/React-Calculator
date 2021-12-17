import React, {Component} from 'react';


class Calculation extends Component {
    render() {
        let {calc} = this.props;
        return (
            <div className="Calculation">
                {calc}
            </div>
        );
    }
}
export default Calculation;