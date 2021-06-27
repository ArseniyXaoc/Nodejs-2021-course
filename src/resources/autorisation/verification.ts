import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import {  NextFunction, Request, Response } from 'express';
import { User } from '../../entity/User';
import ENV from '../../common/config';

const resForbidden = (res: Response) => {
  res.status(401).send({ auth: false, message: 'Unautorized' });
}

export function validateSassion(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const sessionToken:string | undefined = req.headers.authorization;

  const secretKey = ENV.AUTH_KEY || '';
  if (!sessionToken) {
    resForbidden(res);
  } else {
    const [type, token] = sessionToken.split(' ');
    if(token && type === 'Bearer'){
          jwt.verify(token, secretKey, (_err, decoded) => {
      if (decoded) {
        const user = getRepository(User).findOne(decoded['id']);
        if (user) {
          Object.assign(req, user);
          next();
        } else {
          res.status(403).send({ auth: false, message: 'Forbidden' });
        }
      } else {
        resForbidden(res);
      }
    });
    } else {
      resForbidden(res);
    }

  }
}


