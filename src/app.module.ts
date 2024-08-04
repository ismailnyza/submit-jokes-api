import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesModule } from './jokes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://backend-admin:nZ8XUfjQoXeG4tKY@maincluster.3ehwinw.mongodb.net/?retryWrites=true&w=majority&appName=maincluster',
    ),
    JokesModule,
  ],
})
export class AppModule {}
