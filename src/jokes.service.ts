import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke } from './schemas/joke.schema';
import { JokeType } from './schemas/joke-type.schema';
import { CreateJokeDto } from './dto/create-joke.dto';

@Injectable()
export class JokesService {
  constructor(
    @InjectModel(Joke.name) private jokeModel: Model<Joke>,
    @InjectModel(JokeType.name) private jokeTypeModel: Model<JokeType>,
  ) {}

  async createJoke(createJokeDto: CreateJokeDto): Promise<Joke> {
    const { content, type } = createJokeDto;
    const jokeType = await this.jokeTypeModel.findOne({ name: type });
    if (!jokeType) {
      throw new NotFoundException(`Joke type "${type}" not found`);
    }
    const newJoke = new this.jokeModel({ content, type: jokeType._id });
    return newJoke.save();
  }

  async getJokes(): Promise<any[]> {
    const jokes = await this.jokeModel.find().populate('type', 'name').exec();
    return jokes.map((joke) => ({
      id: joke._id,
      content: joke.content,
      type: joke.type,
    }));
  }
}
