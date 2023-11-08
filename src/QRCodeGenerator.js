import React, { Component } from "react";
import QRCode from "qrcode.react";

class QRCodeGenerator extends Component {
  constructor(props) {
    super(props);

    const to = "0xbB03661F287d77e8612CBD0385a24E547C7a04d4";
    const value = 10000000000000000; // Value in wei
    const gas = 21000; // Gas limit
    const userOrderNo = 1001;
    const data = `0x7690149a${'0x' + userOrderNo.toString(16)}`; // Optional data
    
    const eip681URL = `ethereum:0x25398398b02b22b87c36012ff1acfe1a24e7b6ef?value=100000000000000&data=0x000000000000000000000000000000000000000000000000000000000000007b`;
    // const eip681URL = `ethereum:${to}?data=${data}`;
    // const eip681URL = `ethereum:${to}?value=${value}&gas=${gas}&data=${data}`;
    // const eip681URL = "ethereum:[address]?value=10000000000000000&gas=21000&gasPrice=20000000000&data=0x7f7465737432000000000000000000000000000000000000000000000000000000600057"

    this.state = {
      eip681URL: eip681URL,
    };
  }

  render() {
    return (
      <div>
        <QRCode value={this.state.eip681URL} />
      </div>
    );
  }
}

export default QRCodeGenerator;
