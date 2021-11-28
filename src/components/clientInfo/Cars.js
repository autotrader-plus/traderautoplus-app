import React, { useState } from 'react';
import './Cars.css';
import CardItem from './CarItem';
import CarFilter from './CarFilter'

/**
 * Renders browse page, calls and provide props to CarFilter, CarItem, Cars
 * @props  {String} carColor
 * @props  {String} carType
 * @props  {String} carBrand
 * @props  {String} carAge
 * @props  {function} handleCarFilter
 * @props  {function} sendPost
 */
function Cars(props) {

    // const getAllCars= () =>{
    // Later on, the props should contain props of carItem attributes based on backend response of which cars to display
    // for now they are fixed (hardcoded)
    // }
    console.log('test')
    console.log(props.postResponse)


    let obj = props.postResponse
    let ID = ''
    let post = ''

    const carInfo = []
    const [eachCar, seteachCar] = useState('')

    for (var key in obj) {
        //console.log(key)
        post = {key};
        console.log(JSON.stringify(post))
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        };

        var postRequest = "";
        //fetch("https://cors-everywhere.herokuapp.com/http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/traderauto-plus", requestOptions)
        fetch("http://localhost:8080/database", requestOptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .then(response => seteachCar(response))
            .then(response => carInfo.push(eachCar))
            .then(response => console.log(carInfo))
    }

    return (
        <div className='cards'>

            <CarFilter
            color = {props.carColor}
            type = {props.carType}
            brand = {props.carBrand}
            age = {props.carAge}
            handleCarFilter = {props.handleCarFilter}
            sendPost = {props.sendPost}
            />

            <h1>Check out these cars recommended to you!</h1>
            <h1>Apply filter to find the one for you!</h1>
            {props.postResponse && Array.from(props.postResponse[4]).map(x => <p>{JSON.stringify(x)}</p>)}
            {/*{props.postResponse}*/}

            {/*cars rendered below should be based on car filter (and sign up info from before)*/}

            <div className='cards__container'>
                <div className='cards__wrapper'>

                    {/*<ul className='cards__items'>*/}
                    {/*    <CardItem*/}
                    {/*        src='images/car1.jpeg'*/}
                    {/*        text='Second hand BMW'*/}
                    {/*        label='Half price!'*/}
                    {/*        path='/services'*/}
                    {/*    />*/}
                    {/*    <CardItem*/}
                    {/*        src='images/car2.jpeg'*/}
                    {/*        text='Second hand Mercedez'*/}
                    {/*        label='Half price!'*/}
                    {/*        path='/services'*/}
                    {/*    />*/}
                    {/*</ul>*/}

                    {/*<ul className='cards__items'>*/}
                    {/*    <CardItem*/}
                    {/*        src='images/car3.jpeg'*/}
                    {/*        text='Second hand Audi'*/}
                    {/*        label='Min Downpayment!'*/}
                    {/*        path='/services'*/}
                    {/*    />*/}
                    {/*    <CardItem*/}
                    {/*        src='images/car4.jpeg'*/}
                    {/*        text='Second hand Chrysler'*/}
                    {/*        label='Best Deal'*/}
                    {/*        path='/products'*/}
                    {/*    />*/}
                    {/*    <CardItem*/}
                    {/*        src='images/car5.jpeg'*/}
                    {/*        text='Second hand Lexus'*/}
                    {/*        label='2017'*/}
                    {/*        path='/sign-up'*/}
                    {/*    />*/}
                    {/*</ul>*/}

                    <ul>
                    {carInfo.map(car => <CardItem
                                         src={car['Model Year']}
                                         text={car['Car']}
                                         label={car['Car Type']}
                                         path={car['Photo']}/>)}
                    </ul>

                </div>
            </div>

        </div>
    );
}

export default Cars