export interface CreateOrderDto {
    name: string,
    phoneNumber: string,
    email: string,
    address: string,
    city: string,
    district: string,
    note: string,
    pay: string,
    delivery: string,
    nameProduct: string,
    colorProduct: string,
    amountProduct: number,
    totalPrice: number,
    // user: any,
}