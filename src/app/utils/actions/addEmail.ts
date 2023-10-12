'use server';

import EmailModel from '../db/models/emails';
import dbConnect from '../db/dbConnect';

export default async function addEmail(formData: FormData) {
  try {
    await dbConnect();
    const newEmail = new EmailModel({
      email: formData.get('email'),
      subDate: new Date(),
    });

    const savedEmail = await newEmail.save();
  } catch (e) {
    throw new Error('There was an error adding the Email. Please try again.');
  }
}
