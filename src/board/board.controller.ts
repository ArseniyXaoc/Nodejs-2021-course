import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from "../auth/auth.guard";
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { HttpExceptionFilter } from "../http-exception.filter";

@Controller('boards')
@UseGuards(AuthGuard)
@UseFilters(new HttpExceptionFilter())
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  async findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const board = await this.boardService.findOne(id);
    if(board) return board;
    throw new NotFoundException;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(id);
  }
}
