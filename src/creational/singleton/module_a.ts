import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'João', age: 32 });
myDatabaseClassic.add({ name: 'Maria', age: 12 });
myDatabaseClassic.add({ name: 'Joana', age: 11 });

export { myDatabaseClassic };
