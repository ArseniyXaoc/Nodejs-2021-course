import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  login: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().alphanum().min(3).max(30).required(), // pattern(new RegExp('^[a-zA-Z0-9]{3-30}$')).required(),
});

const userValidate = (body) => {
  const { error } = userSchema.validate(body);
  const valid = error == null;
  // return valid;
  if (!valid) {
    return {
      error,
      status: 400,
      data: 'Bad request',
    }
  }
  return {
    error,
    status: 201,
    data: body,
  }
}

export default { userValidate };