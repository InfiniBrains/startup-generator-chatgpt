import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { ListEnginesResponse } from 'openai';

import { CreateImageRequestDto } from './dto/CreateImageRequest.dto';
import type { ImagesResponseDto } from './dto/ImagesResponse.dto';
import { OpenAiService } from './openai.service';

@Controller('openai')
@ApiTags('openai')
export class OpenAiController {
  constructor(private service: OpenAiService) {}

  @Get('list-engines')
  async listEngines(): Promise<ListEnginesResponse> {
    return this.service.listEngines();
  }

  @Post('create-images')
  async createImages(
    @Body() req: CreateImageRequestDto,
  ): Promise<ImagesResponseDto> {
    return this.service.createImages(req);
  }
}
