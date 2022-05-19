import axios from "../../Axios";
import React, { Component } from "react";
import BuildControls from "../../Components/BuildControls";
import Burger from "../../Components/Burger";
import Modal from "../../Components/General/Modal";
import OrderSummary from "../../Components/General/OrderSummary";
import Zahialga from "../../Components/Zahialga";
import Spinner from "../../Components/General/Spinner";
import OrderPage from "../OrderPage";

const INGREDIENT_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500};
const INGREDIENT_NAMES = {
    salad: "Салад",
    cheese: "Бяслаг",
    bacon: "Гахайн мах",
    meat: "Үхрийн мах"
};

class BurgerPage extends Component {
    
    state = {
        ingredients : {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0 
        },

        totalPrice: 1000,
        purchasing: false,
        comfirmOrder: false,
        loading: false
    };

    showComfirmModal = () => {
        this.setState({comfirmOrder: true});
    }

    closeComfirmModal = () => {
        this.setState({comfirmOrder: false});
    }

    componentDidMount = () => {
        this.setState({loading: true});
        axios.get("/orders.json").then(response => {
          let arr = Object.entries(response.data);
          arr = arr.reverse();
          arr.forEach(el => {
            console.log(el[1].hayag.name + " ==> " + el[1].dun);
          });
        }).catch(err => console.log(err))
            .finally(() => {
                this.setState({loading: false})
            })
    };
    
    continueOrder = () => {
        const order = {
            orts: this.state.ingredients,
            dun: this.state.totalPrice,
            hayag: {
            name: "Амараа",
            city: "Ub",
            street: "10r horoolol 23-12"
            }
        };

        this.setState({loading: true})
        axios.post("/orders.json", order).then(response => {

        }) .finally(() => {
            this.setState({loading: false})
        })
    };

    ortsNemeh = (type) => {
        // console.log("==> : ", type);
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState({ 
            purchasing: true,
            totalPrice: newPrice, 
            ingredients: newIngredients,
        })
    }

    ortsHasah = (type) => {
        // console.log("==> : ", type);
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]--;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

        this.setState({ 
            purchasing: newPrice > 1000,
            totalPrice: newPrice, 
            ingredients: newIngredients})
    }

    render() {
        const disabledIngredients = {...this.state.ingredients}
        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0
        }
        return (
            <div>
                <Modal closeComfirmModal={this.closeComfirmModal} show={this.state.comfirmOrder}>

                    {this.state.loading ? <Spinner /> : (
                        <OrderSummary 
                            onCancel={this.closeComfirmModal}
                            onContinue={this.continueOrder}
                            price={this.state.totalPrice}
                            ingredientsNames={INGREDIENT_NAMES}
                            ingredients={this.state.ingredients}
                        />
                    )}
                </Modal>

                {this.state.loading ? <Spinner /> : null}
                
                <Burger orts={this.state.ingredients} />
                <BuildControls 
                    showComfirmModal={this.showComfirmModal}
                    ingredientsNames={INGREDIENT_NAMES}
                    disabled={!this.state.purchasing}
                    price={this.state.totalPrice} 
                    disabledIngredients={disabledIngredients} 
                    ortsNemeh={this.ortsNemeh} 
                    ortsHasah={this.ortsHasah}
                />
                <Zahialga orts={this.state.ingredients} ner={this.state.INGREDIENT_NAMES}/>
                {/* <OrderPage /> */}
            </div>
        )
    }
}

export default BurgerPage;