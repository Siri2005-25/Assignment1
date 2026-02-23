"use server";

export type State = number;

export async function addNumbers(
  prevState: State,
  formData: FormData
): Promise<State> {
  const num1 = Number(formData.get("num1"));
  const num2 = Number(formData.get("num2"));

  if (isNaN(num1) || isNaN(num2)) {
    return 0;
  }

  return num1 + num2;
}