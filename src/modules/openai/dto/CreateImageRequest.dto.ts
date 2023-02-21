import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateImageRequestSizeEnum } from 'openai';
import type { CreateImageRequest } from 'openai/api';

const CreateImageRequestSizeEnumDto = ['256x256', '512x512', '1024x1024'];
export enum CreateImageRequestResponseFormatEnumDto {
  url = 'url',
  b64_json = 'b64_json',
}
export class CreateImageRequestDto implements CreateImageRequest {
  /**
   * A text description of the desired image(s). The maximum length is 1000 characters.
   * @type {string}
   * @memberof CreateImageRequest
   */
  @ApiProperty()
  @IsString({ message: 'prompt should be string' })
  @IsNotEmpty({ message: 'field should not be empty' })
  prompt: string;

  /**
   * The number of images to generate. Must be between 1 and 10.
   * @type {number}
   * @memberof CreateImageRequest
   */
  @ApiProperty()
  @IsOptional()
  n?: number;

  /**
   * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
   * @type {string}
   * @memberof CreateImageRequest
   */
  @IsOptional()
  @ApiProperty({ pattern: '256x256|512x512|1024x1024' })
  @IsIn(CreateImageRequestSizeEnumDto, {
    message: 'not int the possible size options',
  })
  size?: '256x256' | '512x512' | '1024x1024';

  /**
   * The format in which the generated images are returned. Must be one of `url` or `b64_json`.
   * @type {string}
   * @memberof CreateImageRequest
   */
  @IsOptional()
  @ApiProperty({ enum: CreateImageRequestResponseFormatEnumDto })
  @IsEnum(CreateImageRequestResponseFormatEnumDto, {
    message: 'not url or b64_json',
  })
  response_format?: 'url' | 'b64_json';

  /**
   * A unique identifier representing your end-user, which will help OpenAI to monitor and detect abuse. [Learn more](/docs/usage-policies/end-user-ids).
   * @type {string}
   * @memberof CreateImageRequest
   */
  @IsOptional()
  @ApiProperty()
  user?: string;
}
