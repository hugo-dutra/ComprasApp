import { IBasicCrudService } from "../IBasicCrudService";
import FirebaseApp, { ReactNativeFirebase } from "@react-native-firebase/app";
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { firebaseConfig } from "../../constants/firebase";
export class FirebaseService<T> implements IBasicCrudService<T> {
  baseCollection: string;
  private firestore = firestore();

  constructor(baseCollection: string) {
    this.baseCollection = baseCollection;
    FirebaseApp.initializeApp(firebaseConfig).then((firebaseApp: ReactNativeFirebase.FirebaseApp) => {
      this.firestore = firestore(firebaseApp);
    })
  }
  create(Object: T): Promise<T> {
    alert("Firebase create implementation");
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<T[]> {
    return new Promise<T[]>((resolve) => {
      this.firestore.collection("usuarios").get().then((response: any) => {
        resolve(response)
      })
    })

    alert("Firebase  listAllimplementation");
    throw new Error("Method not implemented.");
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