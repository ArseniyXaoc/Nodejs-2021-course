import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import {  NextFunction, Request, Response } from 'express';
import { User } from '../../entity/User';
import ENV from '../../common/config';

export function validateSassion(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const sessionToken = req.headers.authorization;

  const secretKey = ENV.AUTH_KEY || '';
  if (!sessionToken) {
    res.status(403).send({ auth: false, message: 'No token provided.' });
  } else {
    jwt.verify(sessionToken.slice(7), secretKey, (_err, decoded) => {
      if (decoded) {
        const user = getRepository(User).findOne(decoded['id']);
        if (user) {
          Object.assign(req, user);
          console.log(`user: ${user}`);
          next();
        } else {
          res.status(401).send({ error: 'not authorized' });
        }
      } else {
        res.status(400).send({ error: 'not authorized' });
      }
    });
  }
}


