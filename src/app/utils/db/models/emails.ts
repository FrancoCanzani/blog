import mongoose from 'mongoose';

export interface Email extends mongoose.Document {
  email: string;
  subDate: Date;
}

const emailSchema = new mongoose.Schema<Email>({
  email: {
    type: String,
    required: [true, 'Please provide the email.'],
  },
  subDate: {
    type: Date,
    required: [true, 'Please specify the date of subscription.'],
  },
});

const EmailModel =
  mongoose.models.Email || mongoose.model<Email>('Email', emailSchema);

export default EmailModel;
