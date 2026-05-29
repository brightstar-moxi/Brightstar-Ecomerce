import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    password: v.string(),
    role: v.union(
      v.literal("admin"),
      v.literal("customer")
    ),
  }),

  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    stock: v.number(),
    category: v.string(),
    image: v.string(),
    status: v.string(),
  }),

  orders: defineTable({
    userId: v.id("users"),
    total: v.number(),
    status: v.string(),
  }),

  payments: defineTable({
    orderId: v.id("orders"),
    proof: v.string(),
    status: v.string(),
  }),
});