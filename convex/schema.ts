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
    phone: v.optional(v.string()),
avatar: v.optional(v.string()),
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
    addressId: v.id("addresses"),
  }),

payments: defineTable({
  userId: v.id("users"),
  proof: v.id("_storage"),
  status: v.string(),
}),
  carts: defineTable({
  userId: v.id("users"),
  productId: v.id("products"),
  quantity: v.number(),
}),
orderItems: defineTable({
  orderId: v.id("orders"),
  productId: v.id("products"),
  quantity: v.number(),
  price: v.number(),

  
}),
addresses: defineTable({
  userId: v.id("users"),
  fullName: v.string(),
  phone: v.string(),
  address: v.string(),
  city: v.string(),
  state: v.string(),
}),

});
// products: defineTable({
//   name: v.string(),
//   description: v.string(),
//   price: v.number(),
//   stock: v.number(),
//   image: v.string(),
//   category: v.string(),
// })

