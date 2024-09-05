import Realm, { BSON, ObjectSchema } from "realm";
// Define your LoginPage model
export class LoginPage extends Realm.Object<LoginPage> {
  _id!: BSON.ObjectId;
  username!: string;
  password!: string;
  static schema: ObjectSchema = {
    name: 'LoginPage',
    properties: {
      _id: 'objectId',
      username: 'string',
      password: 'string',
    },
    primaryKey: '_id',
  };
}