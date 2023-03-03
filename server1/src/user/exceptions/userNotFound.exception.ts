import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

export class userNotFound extends HttpException {
    constructor(post_id: string) {
        super(`Post with id ${post_id} not found`, HttpStatus.NOT_FOUND);
    }
}