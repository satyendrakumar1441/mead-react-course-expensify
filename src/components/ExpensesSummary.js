import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';


const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing 
                    <span> {expenseCount}</span> {expenseWord} totaling <span> {formattedExpensesTotal}</span>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </h1>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(
        state.expenses,
        state.filters
    );

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
