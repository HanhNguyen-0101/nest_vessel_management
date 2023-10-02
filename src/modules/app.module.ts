import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { MdmVslCntr } from '../core/entities/mdm_vsl_cntr.entity';
import typeorm from '../frameworks/db/typeorm';
import { AppService } from '../useCases/app.service';
import { MdmVslCntrModule } from './mdm_vsl_cntr.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    TypeOrmModule.forFeature([MdmVslCntr]),
    MdmVslCntrModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
