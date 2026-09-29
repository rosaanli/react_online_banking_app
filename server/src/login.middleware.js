const isValidLogin = (req, res, next) => {
  const { user, password } = req.body;
  console.log('Body recibido:', req.body);
  const isValid = user === 'admin@email.com' && password === 'test';
  console.log('Validación:', { user, isValid });
  res.status(200).json({ isValid, message: isValid ? 'Login exitoso' : 'Credenciales inválidas' });
};

module.exports = (req, res, next) => {
  if (req.path === '/login' && req.method === 'POST') {
    isValidLogin(req, res, next);
  } else {
    next();
  }
};
