import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createTask = async (formData) =>{
    "use server"
    // const name = formData.get("title");
    // const description = formData.get("description");
    // const priority = formData.get("priority");
    // const status = formData.get("status");

    const newTask = Object.fromEntries(formData.entries())

    console.log("Adding a task", newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath("/tasks");
    }
    return res;
}