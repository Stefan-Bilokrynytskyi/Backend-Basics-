const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    if (req.user.id !== req.params.id) {
      return res
        .status(403)
        .json({ message: 'User has no permission for this action' });
    }

    next();
  } catch (e) {
    console.log(e);
    return res
      .status(403)
      .json({ message: 'User has no permission for this action' });
  }
};
