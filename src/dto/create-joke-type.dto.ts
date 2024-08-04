import { ApiProperty } from '@nestjs/swagger';

export class CreateJokeTypeDto {
  @ApiProperty({ description: 'The name of the joke type' })
  readonly name: string;
}
