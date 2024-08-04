import { ApiProperty } from '@nestjs/swagger';

export class CreateJokeDto {
  @ApiProperty({ description: 'The content of the joke' })
  readonly content: string;

  @ApiProperty({ description: 'The type of the joke' })
  readonly type: string;
}
