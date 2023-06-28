import { AuthService } from '../services/auth.service';
import { AuthDTO } from '../dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: AuthDTO): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
