// class KeyValuePair<K, V> {
//     constructor(public key: K, public value: V){

//     }
// }

// let pair = new KeyValuePair<string, string>('1', 'a');

// class ArrayUtils {
//   static wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// let utils = new ArrayUtils();

// let numbers = ArrayUtils.wrapInArray(1);

// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }

// let result = fetch<User>("url");

// interface Product{
//     name: string;
//     price: number;
// }

// class Store<T>{
//     protected _objects: T[] = [];

//     add(obj: T): void {
//       this._objects.push(obj);
//     }
// }


// class CompressibleStore<T> extends Store<T> {
//     compress(){}
// }

// // Restricting the generic type parameter
// class SearchableStore<T extends { name : string}> extends Store<T> {
//     find(name: string): T | undefined {
//         return this._objects.find((obj)=> obj.name === name)
//     }
// }

// class ProductStore extends Store<Product> {
//         filterByCategory(category)
// }


Type mapping

interface Product {
    name : string;
    price: number;
}

type ReadOnly<T> = {
   readonly [K in keyof T] : T[K]
}

type Optional<T> = {
    [K in keyof T]?: T[K]
}
    
type Nullable<T> = {
    [K in keyof T]: T[K] | null
}

let product: ReadOnly<Product> = {
    name : 'a',
    price : 1
}
