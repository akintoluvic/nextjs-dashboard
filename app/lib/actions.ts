'use server';
 
export async function createInvoice(formData: FormData) {

    // Getting data from the formData object
    // If plenty data, use js `Object.fromEntries` method
    // const rawFormData = Object.fromEntries(formData.entries())
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}