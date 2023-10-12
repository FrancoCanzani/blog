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

    console.log(`An email was added with the _id: ${savedEmail._id}`);
  } catch (e) {
    console.error(e);
  }
}
