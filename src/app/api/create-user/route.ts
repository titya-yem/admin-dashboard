import { prisma } from "@/lib/Prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Check if having user currently login or not ?
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return NextResponse.json({ error: "User not found!" }, { status: 404 });
    }

    // Check for email from user or not ?
    const email = clerkUser.emailAddresses[0]?.emailAddress; // Safer optional chaining
    if (!email) {
      return NextResponse.json(
        { error: "User does not have an email" },
        { status: 400 }
      );
    }

    // Check if user have in database with userId from database row and current login user
    const existingUser = await prisma.user.findUnique({
      where: { userId: clerkUser.id },
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 200 }
      );
    }

    // Create User in database
    const createdUser = await prisma.user.create({
      data: {
        userId: clerkUser.id,
        userName: clerkUser.username || "",
        email,
        subscriptionTier: null,
        subscriptionActive: false,
      },
    });

    return NextResponse.json({ user: createdUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Cannot create user" }, { status: 500 });
  }
}
