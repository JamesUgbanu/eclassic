

class UserMiddleware {
  static checkRole(role) {
    return function(req, res, next) {
      const assignedRoles = req.user['http://localhost:3000.com/roles'];
      if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
        return next();
      }
      return res.status(401).json({
        status: 401,
        message: 'Insufficient role',
      });
    };
  }
}

export default UserMiddleware;
