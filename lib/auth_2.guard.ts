import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class Auth2Guard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log("guard1", this.configService.get("API_KEY"));
    return true;
  }
}
