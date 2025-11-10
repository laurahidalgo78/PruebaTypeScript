export interface Product {
    description: string;
    price: number;
}

const phone: Product={
    description: 'Nokia A1',
    price: 150 
}

const tablet: Product = {
    description: 'IPad Air',
    price: 150
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

//function taxCalculation(options: TaxCalculationOptions): number[]{
//function taxCalculation({tax, products}: TaxCalculationOptions): number[]{
export function taxCalculation(options: TaxCalculationOptions): number[]{
    const {tax, products} = options;
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax
});

console.log('Total', total);
console.log('Tax', taxTotal);

