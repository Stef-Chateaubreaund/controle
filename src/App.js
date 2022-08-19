    import React, { useEffect, useState } from "react";
    import GlobalStyle from "./styles/global";
    import Header from "./components/Header";
    import Resume from "./components/Resume";
    import Form from "./components/Form";
            //basics (holding info declaring at top)--
    const App = () => {
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(  //State, ths us what is holding each component
        data ? JSON.parse(data) : []  //makes a transaction and holding
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {  //use efect runs only 1 time, after it runs the first time we do comma and put something to run again                        --this is the most important
        const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`); //use effect:function to load the page
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
    }, [transactionsList]);  //the trigger to the use efect , when change teh state for the transaction list
//whenever it changes it jumos back up and use use efect again
    const handleAdd = (transaction) => {  
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    };   //its convering the array of transactions to a json string , needed to be parsed ""convert this back to 
            //what it was. 

    return (
        <>
        <Header />
        <Resume income={income} expense={expense} total={total} />
        <Form
            handleAdd={handleAdd}
            transactionsList={transactionsList}
            setTransactionsList={setTransactionsList}
        />
        <GlobalStyle />
        </>
    );
    };

    export default App;