"use server";

export default async function formaction(Data) {
  const task = Data.get("task");
  const priority = Data.get("priority");
  const status = Data.get("status");
  console.log(task + " " + priority + " " + status);
}
