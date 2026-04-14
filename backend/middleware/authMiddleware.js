const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
       jwt.verify(token, 'dnynu secret',(err, decodedToken)=>{
           if(err){
               console.log(err.message);
               return res.status(401).json({ err: 'unauthorized' });
           }else{
               req.user = decodedToken;
               next();
           }
       })
    }
    else{
         return res.status(401).json({ err: 'unauthorized' });
    }
}

const requireRole = (roles) => {
    return (req, res, next) => {
        const token = req.cookies.jwt;
        if(token){
           jwt.verify(token, 'dnynu secret',(err, decodedToken)=>{
               if(err){
                   return res.status(401).json({ err: 'unauthorized' });
               } else if(roles.includes(decodedToken.role)){
                   req.user = decodedToken;
                   next();
               } else{
                   return res.status(403).json({ err: 'forbidden' });
               }
           })
        } else {
             return res.status(401).json({ err: 'unauthorized' });
        }
    }
}

const requireAdmin = requireRole(['admin']);
const requireShopkeeper = requireRole(['admin', 'shopkeeper']);

module.exports = { requireAuth, requireRole, requireAdmin, requireShopkeeper };
