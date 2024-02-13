import { deleteWebook } from "@/util/webhook";

export async function POST(req: any) {
    const userId: string = await req.json();

    try {
        await deleteWebook(userId);
    } catch (err) {
        console.log(err)
    }
    
    return new Response();
}