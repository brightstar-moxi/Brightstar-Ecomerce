import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// import bcrypt from "bcryptjs";

export const signup = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
  },

  handler: async (ctx, args) => {
    
    // CHECK IF USER EXISTS
    const existingUser = await ctx.db
      .query("users")
      .filter((q) =>
        q.eq(q.field("email"), args.email)
      )
      .first();

    if (existingUser) {
      throw new Error("User already exists");
    }

    // HASH PASSWORD
    // const hashedPassword = await bcrypt.hash(
    //   args.password,
    //   10
    // );
    const hashedPassword = args.password;

    // CREATE USER
    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      password: hashedPassword,
      role: "customer",
    });

    return userId;
  },
});

export const login = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },

  handler: async (ctx, args) => {
    
    // FIND USER
    const user = await ctx.db
      .query("users")
      .filter((q) =>
        q.eq(q.field("email"), args.email)
      )
      .first();

    if (!user) {
       console.log("NO USER FOUND:", args.email);
      throw new Error("Invalid credentials");
    }

    // CHECK PASSWORD
    // const isMatch = await bcrypt.compare(
    //   args.password,
    //   user.password
    // );
    const isMatch =
  args.password === user.password;
  console.log("DATABASE USER:", user);
console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  },
});

export const getUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const createFirstAdmin = mutation({
  handler: async (ctx) => {
    const admin = await ctx.db
      .query("users")
      .filter((q) =>
        q.eq(q.field("email"), "admin@gmail.com")
      )
      .first();

    if (admin) {
      return admin._id;
    }

    return await ctx.db.insert("users", {
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin",
    });
  },
});