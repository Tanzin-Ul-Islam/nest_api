import { HttpCode, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import JwtHelper from "../../jwt/jwt.helper";

export class UserMiddleware implements NestMiddleware {
    constructor( private readonly jwtHelper: JwtHelper,) { }
    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const bearerToken = req.headers.authorization;
            const bearer = 'Bearer ';
            if (!bearerToken || !bearerToken.startsWith(bearer)) {
                return false;
            }
            const token = bearerToken.replace(bearer, '');
            const jwtPayload = this.jwtHelper.verifyToken(token);
            console.log('payload', jwtPayload);
            //return this.jwtService.verify(token);

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