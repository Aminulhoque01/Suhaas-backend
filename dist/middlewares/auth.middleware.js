import jwt from 'jsonwebtoken';
export const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.sendStatus(401);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // now TS knows this exists
        next();
    }
    catch (err) {
        return res.sendStatus(401);
    }
};
export const isAdmin = (req, res, next) => {
    if (req.user?.role !== 'ADMIN')
        return res.sendStatus(403);
    next();
};
