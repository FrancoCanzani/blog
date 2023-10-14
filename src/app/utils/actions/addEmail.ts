'use server';

import EmailModel from '../db/models/emails';
import dbConnect from '../db/dbConnect';
import isEmailInDatabase from './isEmailInDatabase';

export default async function addEmail(userEmail: string | undefined) {
  await dbConnect();

  if (await isEmailInDatabase(userEmail)) {
    return;
  }

  try {
    const newEmail = new EmailModel({
      email: userEmail,
      subDate: new Date(),
    });

    const savedEmail = await newEmail.save();
  } catch (error) {
    throw new Error('Something went wrong. Please try again!');
  }
}
