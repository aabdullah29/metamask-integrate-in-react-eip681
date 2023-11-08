// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrderBook {
    mapping(address => uint256) userOrderBook;
    event SetUserOrderNo(address indexed userAddress, uint256 userID);

    // function setUserID(uint256 userOrderNo) public {
    //     require(userOrderBook[msg.sender] == 0, "User already has an Order No");
    //     userOrderBook[msg.sender] = userOrderNo;
    //     emit SetUserOrderNo(msg.sender, userOrderNo);
    // }

    function getUserID(address userAddress) public view returns (uint256) {
        return userOrderBook[userAddress];
    }


    // address payable private to = payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);

    address payable private to = payable(0xbB03661F287d77e8612CBD0385a24E547C7a04d4);
    fallback(bytes calldata data) external payable returns (bytes memory) {
        (uint256 userOrderNo) = abi.decode(data, (uint256));
        // require(userOrderBook[msg.sender] == 0, "User already has an Order No");
        userOrderBook[msg.sender] = userOrderNo;
        emit SetUserOrderNo(msg.sender, userOrderNo);
        
        (bool sent, bytes memory res) = to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        return res;
    }

    // receive() external payable { }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function sendBalance( address payable _to, uint256 _value) public returns (bytes memory) {
        (bool sent, bytes memory res) = _to.call{value: _value}("");
        require(sent, "Failed to send Ether");
        return res;
    }

    function encode(uint256 value ) external pure returns (bytes memory) {
        return abi.encodePacked(value);
    }

    function dencode(bytes calldata data) external pure returns (uint256) {
        (uint256 userOrderNo) = abi.decode(data, (uint256));
        return userOrderNo;
    }
}
