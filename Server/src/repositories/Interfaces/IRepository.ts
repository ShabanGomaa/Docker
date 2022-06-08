export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T>;
    add(t: T): Promise<T>;
    update(t: T): Promise<T>;
    delete(id: number): Promise<boolean>;

    // TODO
    // where():;
}
