"use server"

import { kickSchema } from "@/lib/validation/kickstarter"
import { Database } from "@/types/supabase";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import * as z from "zod";


export async function updateKickstarter(context: z.infer<typeof kickSchema>) {
    const supabase = createServerActionClient<Database>({ cookies });
    try {
        const kicker = kickSchema.parse(context);
        const { data, error } = await supabase
            .from("kickstarter")
            .update({
                title: kicker.title,
                description: kicker.description,
                youtube_link: kicker.youtube_link,
                kickstarter_link: kicker.kickstarter_link
            })
            .eq("id", kicker.id);

            if (error) {
                console.log(error);
                return false;
              }
              return true;
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.log(error);
            return false;
        }
        return false;

    }
}