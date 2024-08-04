import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './schemas/joke.schema';

@ApiTags('jokes')
@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new joke' })
  @ApiResponse({
    status: 201,
    description: 'The joke has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createJokeDto: CreateJokeDto): Promise<Joke> {
    return this.jokesService.createJoke(createJokeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all jokes' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved list of jokes.',
  })
  async findAll(): Promise<any[]> {
    return this.jokesService.getJokes();
  }
}
