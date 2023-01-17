// Importing the Charts Import statement
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';


// Importing the Images
import { AddIcon, CartIcon, MenuIcon, Person1, Person2, Person3 } from "../../constants/images";
// Importing the CSS
import "./Expenses.css";

// Importing useState
import {useState} from "react";

// export function
export default function Expenses(){
    // Active hook
    const [cellActiveIndex, setCellActiveIndex] = useState(0);

    // Chart Data
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
      ];

    //   Handling mouse Over
    const handleMouseOver = (data:any, index:number) =>{
        setCellActiveIndex(index)

    }

    return(
        <>
            <main className="expenses">
                <div className="expensesCard">
                    <section className="expensesOverview">
                        <div className="expensesHeader">
                            <p className="expensesTitle">Expenses</p>
                            <div className="expensesActions">
                                <div className="personImages">
                                    <img className="person1" src={Person1} alt="person one" />
                                    <img className="person2" src={Person2} alt="person two" />
                                    <img className="person3" src={Person3} alt="person three" />
                                </div>
                                <button className='addIcon'>
                                    <img src={AddIcon} alt="add" />
                                </button>
                            </div>
                        </div>

                        <p className="dateRange">01 - 25 March, 2020</p>
                        {/* Using a library called Recharts to create charts */}

                        {/* the Responsive Container */}
                        <ResponsiveContainer width="100%" minHeight="9vh">
                            <BarChart width={150} height={40} data={data}>
                            <Bar dataKey="uv" fill="rgba(21, 122, 255, .2)" onMouseOver={handleMouseOver}>
                                {
                                    data.map((entry, index)=>(
                                        <Cell cursor="pointer"
                                        fill={index === cellActiveIndex?"rgb(21, 122, 255)":"rgba(21, 122, 255, .2)"}
                                        key={index}
                                        />
                                    ))
                                }
                            </Bar>
                            </BarChart>
                        </ResponsiveContainer>

                        <div className="expensesOverviewHeader">
                            <p className="expensesOverviewTitle">
                                Today
                            </p>
                            <button><img src={MenuIcon} alt="" /></button>
                        </div>

                        <ul>
                            <li className="expenseItem">
                                <div className="expenseItemLeft">
                                    <div className="expenseItemDiv">
                                        <img src={CartIcon} alt="cart" />
                                    </div>
                                    <div className="expenseItemDetails">
                                        <p className="expenseItemTitle">
                                            Grocery
                                        </p>
                                        <p className="expenseItemTime">5:32 pm - Menjin Colombia</p>
                                    </div>
                                </div>

                                <p className="expenseItemPrice">-326.80</p>
                            </li>
                            
                        </ul>

                    </section>
                </div>
            </main>
        </>
    )
}