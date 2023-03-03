import {BaseExceptionFilter} from "@nestjs/core"
import {Catch, ArgumentsHost} from "@nestjs/common"

@Catch()
export class ExceptionLoggerFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        console.log("Exception throw", exception);
        super.catch(exception, host);
    }
}