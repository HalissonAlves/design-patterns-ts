import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Roberto', age: 32 });
myDatabaseClassic.add({ name: 'Fred', age: 12 });
myDatabaseClassic.add({ name: 'Fernanda', age: 11 });

myDatabaseClassic.show();

console.log(myDatabaseClassicFromModuleA === myDatabaseClassic);
