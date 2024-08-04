// src/jokes.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './schemas/joke.schema';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  async create(@Body() createJokeDto: CreateJokeDto): Promise<Joke> {
    return this.jokesService.createJoke(createJokeDto);
  }

  @Get()
  async findAll(): Promise<Joke[]> {
    return this.jokesService.getJokes();
  }
}
