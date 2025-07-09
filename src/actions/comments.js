"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function saveComment({ postId, parentCommentId }, formData) {
  const session = await auth();
  await db.query(
    "INSERT INTO comments (user_id, post_id, parent_comment_id, body) VALUES ($1, $2, $3, $4)",
    [session.user.id, postId, parentCommentId, formData.get("comment")]
  );

  revalidatePath(`/post/${postId}`);
  //added postID and parentCommentID so more then 1 commant can be added
  return { postId: postId, parentCommentId: parentCommentId, success: true };
}
