// import jwt from "jsonwebtoken"
// import { TOKEN_SECRET } from "../config.js";

// export const authRequired = (req, res, next) => {
//     //console.log(req.headers);
//     const { token } = req.cookies;
//     if (!token) return res.status(401).json({ message: "No token, authorization denied" });

//     jwt.verify(token, TOKEN_SECRET, (err, user) => {
//         if (err) return res.status(403).json({ message: "Invalid token" });

//         req.user = user;
//     })

//     next();
// }


import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    //console.log(req.headers);
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
    
        req.user = user;
        next();
    });
    
}

// import jwt from "jsonwebtoken";
// import { TOKEN_SECRET } from "../config.js";

// export const authRequired = (req, res, next) => {
//     // Obtener el token desde el encabezado 'Authorization'
//     const authHeader = req.headers['authorization']; // El encabezado tiene el formato "Bearer <token>"
//     const token = authHeader && authHeader.split(' ')[1]; // Si el encabezado existe, extraer el token

//     if (!token) return res.status(401).json({ message: "No token, authorization denied" });

//     // Verificar el token
//     jwt.verify(token, TOKEN_SECRET, (err, user) => {
//         if (err) return res.status(403).json({ message: "Invalid token" });

//         req.user = user; // Añadir la información del usuario al request
//         next();
//     });
// };
