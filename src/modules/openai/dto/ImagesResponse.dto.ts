import { ImagesResponse } from 'openai';
import type { ImagesResponseDataInner } from 'openai/api';
import {ApiProperty} from "@nestjs/swagger";

export class ImagesResponseDataInnerDto implements ImagesResponseDataInner {
  /**
   *
   * @type {string}
   * @memberof ImagesResponseDataInner
   */
  @ApiProperty()
  url?: string;

  /**
   *
   * @type {string}
   * @memberof ImagesResponseDataInner
   */
  @ApiProperty()
  b64_json?: string;
}
export class ImagesResponseDto implements ImagesResponseDto {
  /**
   *
   * @type {number}
   * @memberof ImagesResponse
   */
  @ApiProperty()
  created: number;

  /**
   *
   * @type {Array<ImagesResponseDataInner>}
   * @memberof ImagesResponse
   */
  @ApiProperty()
  data: ImagesResponseDataInnerDto[];
}
