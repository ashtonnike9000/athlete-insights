"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAthlete(formData: FormData) {
  const athlete = await prisma.athlete.create({
    data: {
      name: formData.get("name") as string,
      eventFocus: (formData.get("eventFocus") as string) || "",
      shoeSize: (formData.get("shoeSize") as string) || "",
      weeklyVolume: (formData.get("weeklyVolume") as string) || "",
      coach: (formData.get("coach") as string) || "",
      teamGroup: (formData.get("teamGroup") as string) || "",
    },
  });

  revalidatePath("/");
  revalidatePath("/athletes");
  redirect(`/athletes/${athlete.id}`);
}

export async function createVisit(formData: FormData) {
  const athleteId = formData.get("athleteId") as string;
  const visitDate = new Date(formData.get("visitDate") as string);
  const location = (formData.get("location") as string) || "";
  const interviewer = (formData.get("interviewer") as string) || "";
  const sessionNotes = (formData.get("sessionNotes") as string) || "";

  const visit = await prisma.visit.create({
    data: { athleteId, visitDate, location, interviewer, sessionNotes },
  });

  const fwCount = parseInt((formData.get("fwCount") as string) || "0");
  for (let i = 0; i < fwCount; i++) {
    const shoeName = formData.get(`fw_shoeName_${i}`) as string;
    if (!shoeName) continue;
    await prisma.footwearNote.create({
      data: {
        athleteId,
        visitId: visit.id,
        shoeName,
        useCase: (formData.get(`fw_useCase_${i}`) as string) || "",
        frequency: (formData.get(`fw_frequency_${i}`) as string) || "",
        sentiment: (formData.get(`fw_sentiment_${i}`) as string) || "positive",
        notes: (formData.get(`fw_notes_${i}`) as string) || "",
      },
    });
  }

  const quoteCount = parseInt((formData.get("quoteCount") as string) || "0");
  for (let i = 0; i < quoteCount; i++) {
    const text = formData.get(`quote_text_${i}`) as string;
    if (!text) continue;
    await prisma.quote.create({
      data: {
        athleteId,
        visitId: visit.id,
        text,
        topic: (formData.get(`quote_topic_${i}`) as string) || "general",
        context: (formData.get(`quote_context_${i}`) as string) || "",
      },
    });
  }

  const protoCount = parseInt(
    (formData.get("protocolCount") as string) || "0"
  );
  for (let i = 0; i < protoCount; i++) {
    const category = formData.get(`protocol_category_${i}`) as string;
    if (!category) continue;
    await prisma.protocol.create({
      data: {
        athleteId,
        visitId: visit.id,
        category,
        description:
          (formData.get(`protocol_description_${i}`) as string) || "",
      },
    });
  }

  revalidatePath("/");
  revalidatePath("/athletes");
  revalidatePath(`/athletes/${athleteId}`);
  revalidatePath("/products");
  revalidatePath("/quotes");
  redirect(`/athletes/${athleteId}`);
}

export async function deleteAthlete(id: string) {
  await prisma.athlete.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/athletes");
  redirect("/athletes");
}

export async function deleteVisit(id: string, athleteId: string) {
  await prisma.visit.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath(`/athletes/${athleteId}`);
  revalidatePath("/products");
  revalidatePath("/quotes");
}
