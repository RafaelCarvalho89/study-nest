import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { IndicatorModule } from './indicator/indicator.module';
import { CensusModule } from './census/census.module';
import { SchoolModule } from './school/school.module';
import { IndicatorBySchoolModule } from './indicator-by-school/indicator-by-school.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    IndicatorModule,
    CensusModule,
    SchoolModule,
    IndicatorBySchoolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
