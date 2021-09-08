import { Body, Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request, @Body() body): string {
    return 'Cats' + request.header + 'body:' + body;
  }
}
