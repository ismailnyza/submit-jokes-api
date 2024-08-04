// src/dto/create-joke.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateJokeDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}
