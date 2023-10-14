'use server';

import EmailModel from '../db/models/emails';
import dbConnect from '../db/dbConnect';

export default async function addEmail(formData: FormData) {
  try {
    await dbConnect();
    if (await isEmailInDatabase(formData.get('email'))) {
      return;
    } else {
      const newEmail = new EmailModel({
        email: formData.get('email'),
        subDate: new Date(),
      });

      const savedEmail = await newEmail.save();
    }
  } catch (e) {
    throw new Error('There was an error adding the Email. Please try again.');
  }
}

async function isEmailInDatabase(email: FormDataEntryValue | null) {
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
