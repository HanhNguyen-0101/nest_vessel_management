import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MdmVslCntrModule } from './mdm_vsl_cntr/mdm_vsl_cntr.module';
import { MdmVslCntr } from './mdm_vsl_cntr/entities/mdm_vsl_cntr.entity';

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
