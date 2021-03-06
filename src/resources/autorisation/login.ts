import bcript from 'bcrypt';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { User } from '../../entity/User';
import ENV from '../../common/config';

const router = Router();

router.route('/').post(async (req, res, next) => {
  try {
    const { login, password }: User = req.body;
    const employe = getRepository(User).findOne({ login });
    employe.then((data) => {
      if (data) {
        bcript.compare(password, data.password, (_err, matches) => {
          if (matches) {
            const secretKey: jwt.Secret = ENV.AUTH_KEY || '';
            const payload = { userId: data.id, login: data.login };
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
            if(token){
              res.status(200).send({token});
            } else {
              res.status(403).send({ error: 'Forbidden' });
            }
          } else {
            res.status(502).send({ error: 'Forbidden' });
          }
        });
      } else {
        res.status(403).send({ error: 'Forbidden' });
      }
    });
  } catch (err) {
    next(err);
  }
});

export default router;