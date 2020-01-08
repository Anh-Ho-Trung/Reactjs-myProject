import React from "react";
import ItemImage from "./itemImage";
import { connect } from "react-redux";

class ListImage extends React.Component {
  render() {
    let data = this.props.dataProduce;
    return (
      <div className="row">
        {data.map((item, index) => (
          <ItemImage name={item.name} number={item.number} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let dataProduce = state.productList.filter(item => item.number !== 0);
  return {
    dataProduce
  };
};

export default connect(mapStateToProps)(ListImage);
