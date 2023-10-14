import EmailModel from '../db/models/emails';
import dbConnect from '../db/dbConnect';

export default async function isEmailInDatabase(
  email: FormDataEntryValue | null
) {
  await dbConnect();

  try {
    const user = await EmailModel.findOne({ email: email });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
