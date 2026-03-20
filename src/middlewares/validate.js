const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: true
  });
  console.log('Validated data:', value);
 
  if (error) return next(error);
  req.validated = value;
  next();
};
 
export default validate;