import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateShaveDto } from './dto/create-shave.dto';
import { UpdateShaveDto } from './dto/update-shave.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ShaveService {
  constructor(private prismaService: PrismaService) {}

  async create(createShaveDto: CreateShaveDto) {
    const newShave = await this.prismaService.shave.create({
      data: {
        title: createShaveDto.title,
        image: createShaveDto.image,
        price: createShaveDto.price,
      },
    });
    return { status: HttpStatus.CREATED, newShave };
  }

  async findAll() {
    return await this.prismaService.shave.findMany();
  }

  async findOne(id: number) {
    const shave = await this.prismaService.shave.findUnique({
      where: { id },
    });
    if (!shave) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: `стрижка с id ${id} не найдена`,
      };
    }
    return shave;
  }

  async update(id: number, updateShaveDto: UpdateShaveDto) {
    const updateShave = await this.prismaService.shave.update({
      where: { id },
      data: updateShaveDto,
    });
    return { status: HttpStatus.CREATED, updateShave };
  }

  async remove(id: number) {
    const deleteShave = await this.prismaService.shave.delete({
      where: { id },
    });
    return { status: HttpStatus.CREATED, deleteShave };
  }
}
