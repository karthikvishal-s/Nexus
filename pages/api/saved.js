import { initMongoose } from "@/lib/mongoose";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Post from "@/models/Post";
import Saved from "@/models/Saved";

// Helper to update saved count on a post
async function updateSavedCount(postId) {
  const post = await Post.findById(postId);
  if (!post) return;
  post.savedCount = await Saved.countDocuments({ post: postId });
  await post.save();
}

export default async function handle(req, res) {
  await initMongoose();
  const session = await getServerSession(req, res, authOptions);
  const userID = session?.user?._id;

  if (!userID) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Handle GET request – fetch all saved posts by this user
  if (req.method === "GET") {
    const savedPosts = await Saved.find({ author: userID }).populate({
      path: "post",
      populate: {
        path: "author",
        select: "username name2 sigil image", // fields to include from author
      },
    });

    const posts = savedPosts
      .filter(entry => entry.post !== null) // ✅ Skip if post is deleted
      .map(entry => ({
        ...entry.post.toObject(),
        savedByMe: true,
      }));

    return res.json({ posts });
  }

  // Handle POST request – toggle save/unsave
  if (req.method === "POST") {
    const postId = req.body.id;

    const existingSave = await Saved.findOne({ author: userID, post: postId });

    if (existingSave) {
      await existingSave.deleteOne();
      await updateSavedCount(postId);
      return res.json({ saved: false });
    } else {
      await Saved.create({ author: userID, post: postId });
      await updateSavedCount(postId);
      return res.json({ saved: true });
    }
  }

  // Handle unsupported methods
  return res.status(405).json({ error: "Method Not Allowed" });
}
