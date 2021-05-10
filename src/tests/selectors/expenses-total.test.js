import moment from 'moment';
import getExpensesTotal from '../../selectors/expenses-total';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()   
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()   
}];

test('should correctly add up all expenses', () => {
    const total = getExpensesTotal(expenses);
    
    expect(total).toBe(114195);
});

test('should return 0', () => {
    const total = getExpensesTotal([]);
    
    expect(total).toBe(0);
});

test('should return amount of single expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    
    expect(total).toBe(expenses[0].amount);
});

