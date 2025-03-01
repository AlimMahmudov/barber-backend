import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateSendDto } from './dto/create-send.dto';
import { UpdateSendDto } from './dto/update-send.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SendService {
  constructor(private prismaService: PrismaService) {}

  async create(createSendDto: CreateSendDto) {
    const newSend = await this.prismaService.send.create({
      data: {
        name: createSendDto.name,
        master: createSendDto.master,
        service: createSendDto.service,
        time: createSendDto.time,
        day: createSendDto.day,
        email: createSendDto.email,
        phone: createSendDto.phone,
      },
    });
    return { status: HttpStatus.CREATED, newSend };
  }

  async findAll() {
    return await this.prismaService.send.findMany();
  }

  async findOne(id: number) {
    const send = await this.prismaService.send.findUnique({
      where: { id },
    });
    if (!send) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: `not ${id}`,
      };
    }
    return send;
  }

  async update(id: number, updateSendDto: UpdateSendDto) {
    const updateSend = await this.prismaService.send.update({
      where: { id },
      data: updateSendDto,
    });
    return { status: HttpStatus.CREATED, updateSend };
  }

  async remove(id: number) {
    const deleteSend = await this.prismaService.send.delete({
      where: { id },
    });
    return { status: HttpStatus.CREATED, deleteSend };
  }
}
