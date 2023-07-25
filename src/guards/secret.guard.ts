import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';

@Injectable()
export class SecretCodeGuard implements CanActivate {

    private readonly secretCodeEnv = process.env.SECRET_CODE;

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const { secretCode } = request.body;

        return secretCode === this.secretCodeEnv;
    }
}
