const jwt=require('jsonwebtoken')
async function isAuthenticate(req,res,next){
    const token = req.headers['x-access-token'] || req.get('x-access-token');

        if (!token) {
            return res.status(401)
                .json({ message: 'Unauthorized, JWT token is require' });
        }
        try {
            const decoded = jwt.verify(auth, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (err) {
            return res.status(401)
                .json({ message: 'Unauthorized, JWT token wrong or expired' });
        }
    }

module.exports={isAuthenticate}