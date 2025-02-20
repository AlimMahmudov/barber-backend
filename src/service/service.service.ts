import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private prismaService: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    const newService = await this.prismaService.service.create({
      data: {
        title: createServiceDto.title,
        type: createServiceDto.type,
        time: createServiceDto.time,
        price: createServiceDto.price,
      },
    });
    return { status: HttpStatus.CREATED, newService };
  }

  async findAll() {
    return await this.prismaService.service.findMany();
  }

  async findOne(id: number) {
    const service = await this.prismaService.service.findUnique({
      where: { id },
    });
    if (!service) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: `Еда с id ${id} не найдена`,
      };
    }
    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const updatedService = await this.prismaService.service.update({
      where: { id },
      data: updateServiceDto,
    });
    return { status: HttpStatus.OK, updatedService };
  }

  async remove(id: number) {
    const deletedService = await this.prismaService.service.delete({
      where: { id },
    });
    return { status: HttpStatus.OK, deletedService };
  }
}
