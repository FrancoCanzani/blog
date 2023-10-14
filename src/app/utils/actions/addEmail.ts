'use server';

import EmailModel from '../db/models/emails';
import dbConnect from '../db/dbConnect';
import isEmailInDatabase from './isEmailInDatabase';

export default async function addEmail(userEmail: FormDataEntryValue | null) {
  try {
    await dbConnect();

    // Check if the email is already in the database
    if (await isEmailInDatabase(userEmail)) {
      throw new Error('Email is already subscribed.');
    } else {
      const newEmail = new EmailModel({
        email: userEmail,
        subDate: new Date(),
      });

      const savedEmail = await newEmail.save();
    }
  } catch (e) {
    throw e;
  }
}
