import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import {JwtService} from "@nestjs/jwt"

@Injectable()
export class CheckUserMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: Function) {
    const Authorization = req.header('authorization');

    if(!Authorization) {
      req.user = null;
      next();
    } else {
      const token = Authorization.replace('Bearer ', '');

      try {
        const {email} = this.jwtService.verify(token, {
          secret: process.env.SECRETKEY
        })
        req.user = {email};
        next();
      } catch (error) {
        req.user = null;
        console.error(error);
      }
    }
  }
}
