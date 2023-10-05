'use server';

import EmailModel from '../db/models/emails';

export default async function addEmail(formData: FormData) {
  try {
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
