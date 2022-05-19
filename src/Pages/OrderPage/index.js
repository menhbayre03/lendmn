import axios from "../../Axios";
import React, { Component } from "react";
import Spinner from "../../Components/General/Spinner";
import "./style.css";

class OrderPage extends Component {
    
    state = {
        orders: [],
        loading: false
    }
    
    componentDidMount() {
        this.setState({ loading: true });
        axios
        .get("/orders.json")
        .then(response => {
            let dat = Object.entries(response.data).reverse();
            console.log(dat);
            this.setState({ orders: dat });
        })
        .catch(err => console.log(err))
        .finally(() => {
            this.setState({ loading: false });
        });
      }
    
      render() {
        return (
            <div>
                {this.state.loading ? 
                    <Spinner /> : (
                        this.state.orders.map(el => (
                            <div>{el}</div>
                    )))
                }
            </div>
        )
    }
    }
    
    export default OrderPage;
    