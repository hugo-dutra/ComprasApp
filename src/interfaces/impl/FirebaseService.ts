import { IBasicCrudService } from "../IBasicCrudService";
import { myFirestore } from "./firebaseConnection";
import { collection, DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore';
export class FirebaseService<T> implements IBasicCrudService<T> {
  baseCollection: string;


  constructor(baseCollection: string) {
    this.baseCollection = baseCollection;
  }
  create(Object: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<T[]> {
    return new Promise<any>((resolve) => {
      const snapshot = getDocs(collection(myFirestore, "usuarios"));
      snapshot.then((value: QuerySnapshot<DocumentData>) => {
        resolve(value.docs.map((doc) => {
          const completeDocument = {
            id: doc.id,
            data: doc.data(),
            meta: doc.metadata
          }
          return completeDocument;
        }))
      })
    })
  }
  update(id: number): Promise<T> {
    alert("Firebase update implementation");
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    alert("Firebase delete implementation");
    throw new Error("Method not implemented.");
  }

}