// convex/payments.ts

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPayment = mutation({
 args: {
  // orderId: v.id("orders"),
  userId: v.id("users"),
  proof: v.id("_storage"),
},

  handler: async (ctx, args) => {
   return await ctx.db.insert("payments", {
  // orderId: args.orderId,
  userId: args.userId,
  proof: args.proof,
  status: "Pending",
});
  },
});

export const getAllPayments = query({
  handler: async (ctx) => {
    const payments = await ctx.db
      .query("payments")
      .collect();

    return await Promise.all(
      payments.map(async (payment) => {
        const user = await ctx.db.get(
          payment.userId
        );

        const proofUrl =
          await ctx.storage.getUrl(
            payment.proof
          );

        return {
          ...payment,
          customerName:
            user?.name || "Unknown User",
          proofUrl,
        };
      })
    );
  },
});


export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const updatePaymentStatus =
  mutation({
    args: {
      paymentId: v.id("payments"),
      status: v.string(),
    },

   handler: async (ctx, args) => {

  await ctx.db.patch(
    args.paymentId,
    {
      status: args.status,
    }
  );

  const payment = await ctx.db.get(
    args.paymentId
  );

  if (!payment) return;

  const order = await ctx.db
    .query("orders")
    .filter((q) =>
      q.eq(
        q.field("userId"),
        payment.userId
      )
    )
    .order("desc")
    .first();

  if (!order) return;

  // PAYMENT APPROVED
  if (args.status === "Approved") {
    await ctx.db.patch(
      order._id,
      {
        status: "Processing",
      }
    );
  }

  // PAYMENT REJECTED
  if (args.status === "Rejected") {
    await ctx.db.patch(
      order._id,
      {
        status: "Payment Rejected",
      }
    );
  }

  // PAYMENT PENDING
  if (args.status === "Pending") {
    await ctx.db.patch(
      order._id,
      {
        status:
          "Pending Payment Approval",
      }
    );
  }
}
  });

  export const getReceiptUrl = query({
  args: {
    storageId: v.id("_storage"),
  },

  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(
      args.storageId
    );
  },
});


export const updateReceipt = mutation({
  args: {
    paymentId: v.id("payments"),
    proof: v.id("_storage"),
  },

  handler: async (ctx, args) => {
    await ctx.db.patch(
      args.paymentId,
      {
        proof: args.proof,
        status: "Pending",
      }
    );
  },
});
export const getMyPayment = query({
  args: {
    userId: v.id("users"),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .filter((q) =>
        q.eq(
          q.field("userId"),
          args.userId
        )
      )
      .order("desc")
      .first();
  },
});