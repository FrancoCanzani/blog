'use server';

import EmailModel from '../db/models/emails';
import dbConnect from '../db/dbConnect';
import isEmailInDatabase from './isEmailInDatabase';
import { z } from 'zod';

export default async function addEmail(FormData: FormData) {
  await dbConnect();

  const emailSchema = z.string().email();

  const email = FormData.get('email');
  const validation = emailSchema.safeParse(email);

  if (!validation.success) {
    throw new Error('Invalid email format');
  }

  const userEmail = validation.data;

  if (await isEmailInDatabase(userEmail)) {
    return;
  }

  try {
    const newEmail = new EmailModel({
      email: userEmail,
      subDate: new Date(),
    });

    const savedEmail = await newEmail.save();
    return savedEmail;
  } catch (error) {
    throw new Error('Something went wrong. Please try again!');
  }
}
