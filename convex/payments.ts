// convex/payments.ts

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPayment = mutation({
  args: {
    userId: v.id("users"),
    proof: v.id("_storage"),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert(
      "payments",
      {
        userId: args.userId,
        proof: args.proof,
        status: "Pending",
      }
    );
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
    },
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