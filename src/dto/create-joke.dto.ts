import { IsString, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class CreateJokeDto {
  @IsNotEmpty()
  readonly type: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;
}
