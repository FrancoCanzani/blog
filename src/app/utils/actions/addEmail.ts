'use server';

export default async function addEmail(formData: FormData) {
  try {
    console.log(formData.get('email'));
  } catch (e) {
    console.log(e);
  }
}
