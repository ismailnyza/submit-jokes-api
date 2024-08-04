import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JokeType } from './schemas/joke-type.schema';
import { CreateJokeTypeDto } from './dto/create-joke-type.dto';

@Injectable()
export class JokeTypesService {
  constructor(
    @InjectModel(JokeType.name) private jokeTypeModel: Model<JokeType>,
  ) {}

  async createJokeType(
    createJokeTypeDto: CreateJokeTypeDto,
  ): Promise<JokeType> {
    const newJokeType = new this.jokeTypeModel(createJokeTypeDto);
    return newJokeType.save();
  }

  async getJokeTypes(): Promise<JokeType[]> {
    return this.jokeTypeModel.find().exec();
  }
}
