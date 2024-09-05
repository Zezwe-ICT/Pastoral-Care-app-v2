import Realm from "realm";
import { LoginPage } from "../models/LoginModel";
import { InjuryForm } from "../models/FormsModel";

// Initialize Realm with combined schemas
const realm = new Realm({
  schema: [LoginPage.schema, InjuryForm.schema],
});

export default realm;
