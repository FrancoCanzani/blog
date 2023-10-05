'use server';

export default async function addComment(formData: FormData) {
  try {
    console.log(formData.get('comment'));
  } catch (e) {
    console.log(e);
  }
}
