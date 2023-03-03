import { Document, FilterQuery, Model, QueryOptions } from 'mongoose';

export class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(doc: any): Promise<any> {
    const createEntity = new this.model(doc);
    return await createEntity.save();
  }

  async findById(id: string, options?: QueryOptions): Promise<T> {
    return await this.model.findById(id, options);
  }

  async findByCondition(
    filter: any,
    field?: any | null,
    options?: any | null,
    populate?: any | null,
  ): Promise<T> {
    return await this.model.findOne(filter, field, options).populate(populate);
  }

  async getByCondition(
    filter: any,
    field?: any | null,
    options?: any | null,
    populate?: any | null,
  ): Promise<T[]> {
    return await this.model.find(filter, field, options).populate(populate);
  }

  async findAll(): Promise<T[]> {
    return await this.model.find();
  }

  async aggregate(options: any): Promise<any> {
    return await this.model.aggregate(options);
  }

  async populate(result: [], options: any) {
    return await this.model.populate(result, options);
  }

  async deleteOne(id: string) {
    await this.model.deleteOne({ _id: id } as FilterQuery<T>);
    return {
      massage: "Delete successfully"
    }
  }

  async deleteMany(id: string) {
    return await this.model.deleteMany({ _id: { $in: id } } as FilterQuery<T>);
  }

  async findByIdAndUpdate(id: any, update: any) {
    return await this.model.findByIdAndUpdate(id, update);
  }

  async findByConditionAndUpdate (filter: any, update: any) {
    return await this.model.findOneAndUpdate(filter as FilterQuery<T>, update);
  }

}
