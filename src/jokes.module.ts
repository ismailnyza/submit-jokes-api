import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { Joke, JokeSchema } from './schemas/joke.schema';
import { JokeType, JokeTypeSchema } from './schemas/joke-type.schema';
import { JokeTypesService } from './joke-types.service';
import { JokeTypesController } from './joke-types.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Joke.name, schema: JokeSchema },
      { name: JokeType.name, schema: JokeTypeSchema },
    ]),
  ],
  controllers: [JokesController, JokeTypesController],
  providers: [JokesService, JokeTypesService],
})
export class JokesModule {}
