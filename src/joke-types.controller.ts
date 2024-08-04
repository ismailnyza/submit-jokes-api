import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JokeTypesService } from './joke-types.service';
import { CreateJokeTypeDto } from './dto/create-joke-type.dto';
import { JokeType } from './schemas/joke-type.schema';

@ApiTags('joke-types')
@Controller('joke-types')
export class JokeTypesController {
  constructor(private readonly jokeTypesService: JokeTypesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new joke type' })
  @ApiResponse({
    status: 201,
    description: 'The joke type has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(
    @Body() createJokeTypeDto: CreateJokeTypeDto,
  ): Promise<JokeType> {
    return this.jokeTypesService.createJokeType(createJokeTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all joke types' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved list of joke types.',
  })
  async findAll(): Promise<JokeType[]> {
    return this.jokeTypesService.getJokeTypes();
  }
}
