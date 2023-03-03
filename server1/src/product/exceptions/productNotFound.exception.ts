import { HttpException, HttpStatus } from '@nestjs/common';

export class productNotFound extends HttpException {
    constructor(product_id: string) {
        super(`Product with id ${product_id} not found`, HttpStatus.NOT_FOUND);
    }
}