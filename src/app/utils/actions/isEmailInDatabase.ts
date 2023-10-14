import EmailModel from '../db/models/emails';

export default async function isEmailInDatabase(
  email: FormDataEntryValue | null
) {
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
