import Realm, { BSON, ObjectSchema } from "realm";
//Documentation// 
// Define Injury Form Model
export class InjuryForm extends Realm.Object<InjuryForm> {
  _id!: BSON.ObjectId;  // Unique identifier
  DateTime!: Date;      // Use Date type for date-time values
  PeopleInvolved!: number;  // Use number type for integers
  PersonName!: string;  // Person's name
  Description!: string;  // Incident description
  Priority!: string;  // Priority of the incident
  Signature!: string;  // Signature (could be a base64 string for an image or text)

  static schema: ObjectSchema = {
    name: "InjuryForm",
    primaryKey: "_id",  // Define _id as the primary key
    properties: {
      _id: "objectId",
      DateTime: "date",
      PeopleInvolved: "int",
      PersonName: "string",
      Description: "string",
      Priority: "string",
      Signature: "string",
    },
  };
}
