// Importing the Charts Import statement
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';


// Importing the Images
import { AddIcon, Boxes, CartIcon, HouseIcon, MenuIcon, Person1, Person2, Person3, Plant, TransportIcon } from "../../constants/images";
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

    // Today Expenses Data
    const todayExpenses = [
      {
        id: 1,
        expense: "Grocery",
        time: "5:12 pm",
        location: "Belanja di pascar",
        price: 326.8,
        icon: CartIcon,
        iconBackgroundColor: "#32a7e2",
      },
      {
        id: 2,
        expense: "Transportation",
        time: "5:12 pm",
        location: "Naik bus umum",
        price: 15.0,
        icon: TransportIcon,
        iconBackgroundColor: "#B548C6",
      },
      {
        id: 3,
        expense: "Housing",
        time: "5:12 pm",
        location: "Bayar Listrik",
        price: 185.75,
        icon: HouseIcon,
        iconBackgroundColor: "#FF8700",
      },
    ];

    // Previous Expenses
    const previousExpenses = [
      {
        id: 1,
        expense: "Food and Drink",
        time: "5:12 pm",
        location: "Makan Steak",
        price: 156.0,
        icon: CartIcon,
        iconBackgroundColor: "#DC3434",
      },
      {
        id: 2,
        expense: "Entertainment",
        time: "5:12 pm",
        location: "Nonton Bioskop",
        price: 35.2,
        icon: TransportIcon,
        iconBackgroundColor: "#4BA83D",
      },
    ];
    
    // Spend Categories
    const spendCategories = [
      {
        id: 1,
        category: "Food and Drinks",
        price: 872.4,
      },
      {
        id: 2,
        category: "Shopping",
        price: 1378.2,
      },
      {
        id: 3,
        category: "Housing",
        price: 928.5,
      },
      {
        id: 4,
        category: "Transportation",
        price: 420.7,
      },
      {
        id: 5,
        category: "Vehicle",
        price: 520,
      },
    ];

    return(
        <>
            <main className="expenses">             
              <div className="expensesCard">
                    <section className="expensesOverview">
                        <div className="expensesHeadDate">
                          <div className="expensesHeader">
                              <p className="expensesTitle">Expenses</p>
                              <div className="expensesActions">
                                  <div className="personImages">
                                      <img className="person1" src={Person1} alt="person one" />
                                      <img className="person2" src={Person2} alt="person two" />
                                      <img className="person3" src={Person3} alt="person three" />
                                  </div>
                                  <button>
                                      <img className='addIcon' src={AddIcon} alt="add" />
                                  </button>
                              </div>
                          </div>

                          <p className="dateRange">01 - 25 March, 2020</p>

                        </div>
                          
                        <div className="expensesDetails">
                          <div>
                              <ResponsiveContainer width="100%" height="9%">
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
                                {
                                  todayExpenses.map((expense)=>(


                                    <li className="expenseItem" key={expense.id}>
                                        <div className="expenseItemLeft">
                                            <div style={{backgroundColor: expense.iconBackgroundColor}} className="expenseItemDiv">
                                                <img src={CartIcon} alt={expense.expense} />
                                            </div>
                                            <div className="expenseItemDetails">
                                                <p className="expenseItemTitle">
                                                    {expense.expense}
                                                </p>
                                                <p className="expenseItemTime">{expense.time} - {expense.location}</p>
                                            </div>
                                        </div>

                                        <p className="expenseItemPrice">-{expense.price.toFixed(2)}</p>
                                    </li>

                                  ))
                                }
                                
                                  
                              </ul>

                              <div className="expensesOverviewHeader">
                                  <p className="expensesOverviewTitle">
                                      Monday, 23 March 2020
                                  </p>
                                  <button><img src={MenuIcon} alt="" /></button>
                              </div>
                                  
                              

                              <ul>
                                {
                                  todayExpenses.map((expense)=>(


                                    <li className="expenseItem" key={expense.id}>
                                        <div className="expenseItemLeft">
                                            <div style={{backgroundColor: expense.iconBackgroundColor}} className="expenseItemDiv">
                                                <img src={CartIcon} alt={expense.expense} />
                                            </div>
                                            <div className="expenseItemDetails">
                                                <p className="expenseItemTitle">
                                                    {expense.expense}
                                                </p>
                                                <p className="expenseItemTime">{expense.time} - {expense.location}</p>
                                            </div>
                                        </div>

                                        <p className="expenseItemPrice">-{expense.price.toFixed(2)}</p>
                                    </li>

                                  ))
                                }
                                
                                  
                              </ul>

                            </div>

                        </div>
                            
                          

                          


                          

               
                          {/* Using a library called Recharts to create charts */}

                          {/* the Responsive Container */}
                          

                         

                    </section>
                    
                    
                    <section className="moneyOverview">
                        <p className="moneyOverviewTitle">Where'd your money go?</p>
                        
                        <ul>
                           {
                            spendCategories.map((category)=>(
                              <li key={category.id}>
                                <div className="spendCategory">
                                  <p className="spendCategoryName">{category.category}</p>
                                  <p className="spendCategoryPrice">{category.price.toFixed(2)}</p>
                                </div>

                                <div className="spendCategoryBar">
                                  {/* Calculate the amount of space the colored bar takes by using the inline styling */}
                                  <div style={{width:`${(category.price/spendCategories.reduce((acc, current) => acc+current.price, 0))*100}%`}} className="spendCategoryColoredBar">

                                  </div>
                                </div>
                              </li>

                            ))
                          }

                          
                        </ul>

                        <div className="saveMoneyDiv">
                          <img className='boxes' src={Boxes} alt="boxes" />
                          <img className='plant' src={Plant} alt="boxes" />

                          <p className='saveMoneyTitle'>Save more money</p>
                          <p className='saveMoneyInfo'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                          
                          <button className='button' type='button'>VIEW TIPS</button>
                        </div>

                        {/* <div className="james">
                          Peter
                        </div> */}
                    </section>
              </div>

              
                
            </main>
        </>
    )
}