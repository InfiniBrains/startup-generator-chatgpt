import { Injectable } from '@nestjs/common';
import type { CreateImageRequest, ListEnginesResponse } from 'openai';
import { Configuration, OpenAIApi } from 'openai';

import { ApiConfigService } from '../../shared/services/api-config.service';
import type { CreateImageRequestDto } from './dto/CreateImageRequest.dto';
import type { ImagesResponseDto } from './dto/ImagesResponse.dto';

@Injectable()
export class OpenAiService {
  constructor(private config: ApiConfigService) {}

  openai = new OpenAIApi(
    new Configuration({
      organization: this.config.get('OPENAI_API_ORG'),
      apiKey: this.config.get('OPENAI_API_KEY'),
    }),
  );

  async listEngines(): Promise<ListEnginesResponse> {
    const res = await this.openai.listEngines();

    return res.data;
  }

  async createImages(req: CreateImageRequestDto): Promise<ImagesResponseDto> {
    const res = await this.openai.createImage({
      prompt: req.prompt,
      size: req.size,
      n: req.n,
      user: req.user,
      response_format: req.response_format,
    });

    return res.data;
  }
}
