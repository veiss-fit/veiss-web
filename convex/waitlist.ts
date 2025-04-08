// convex/waitlist.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createWaitlistEntry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    age: v.string(),
    experience: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("waitlist", {
      name: args.name,
      email: args.email,
      age: args.age,
      experience: args.experience,
    });
  },
});
