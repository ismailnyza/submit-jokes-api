// src/jokes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke } from './schemas/joke.schema';
import { CreateJokeDto } from './dto/create-joke.dto';

@Injectable()
export class JokesService {
  constructor(@InjectModel(Joke.name) private jokeModel: Model<Joke>) {}

  async createJoke(createJokeDto: CreateJokeDto): Promise<Joke> {
    const newJoke = new this.jokeModel(createJokeDto);
    return newJoke.save();
  }

  async getJokes(): Promise<Joke[]> {
    return this.jokeModel.find().exec();
  }
}
