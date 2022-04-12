import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('signin')
    signIn(@Body() body: LoginDto) {
        return this.authService.signIn(body);
    }

    @Post('signup')
    signUp(@Body() body: RegisterDto) {
        return this.authService.signUp(body);
    }
}