import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle(configService.get<string>('SWAGGER_TITLE', 'Jokes API'))
    .setDescription(
      configService.get<string>(
        'SWAGGER_DESCRIPTION',
        'The jokes API description',
      ),
    )
    .setVersion(configService.get<string>('SWAGGER_VERSION', '1.0'))
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger is available at http://localhost:${port}/api-docs`);
}

bootstrap();
