import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthMiddleware implements NestMiddleware{
    constructor(private jwtService: JwtService){
        
    }
    use(req: Request, res: Response, next: NextFunction) {
        //this.jwtService.decode();
        try {
            const authHeader = req.headers.authorization;
            console.log('header', authHeader);
            // const bearer = 'Bearer '
            // if (!authHeader || !authHeader.startsWith(bearer)) {
            //     return ResponseUtils.respondError(res, constants.HTTP_401, constants.UNAUTH_REQ)
            // }
            // const token = authHeader.replace(bearer, '');
            // const jwtPayload = JWTHelper.verifyToken(token)
            // const entity = await CoreModel.findByIdRole(
            //     jwtPayload.user_id,
            //     jwtPayload.role
            // )
            // if (!entity) {
            //     return ResponseUtils.respondError(res, constants.HTTP_401, constants.UNAUTH_REQ)
            // }
            // req.currentUser = entity
            return next()
    
        } catch (error) {
            return error;
        }
    }
}