import React from "react";
import {actionCreators} from "./state/index"
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const Shop = () => {
    const dispatch = useDispatch() ;
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
    const balance = useSelector(state => state.amount)

  return (
    <>
      <h2 className="my-3">Deposit/Withdraw Balance</h2>
      <button className="btn btn-primary mx-3" onClick={() => {withdrawMoney(100)}}>-</button>
      Update Balance ({balance})
      <button className="btn btn-primary mx-3" onClick={() => {depositMoney(100)}}>+</button>
    </>
  );
};

export default Shop;
