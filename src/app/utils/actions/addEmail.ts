'use server';

import EmailModel from '../db/models/emails';
import dbConnect from '../db/dbConnect';

export default async function addEmail(userEmail: FormDataEntryValue | null) {
  await dbConnect();

  try {
    const newEmail = new EmailModel({
      email: userEmail,
      subDate: new Date(),
    });

    const savedEmail = await newEmail.save();
  } catch (e) {
    throw e;
  }
}
