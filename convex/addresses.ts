import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createAddress =
  mutation({
    args: {
      userId: v.id("users"),
      fullName: v.string(),
      phone: v.string(),
      address: v.string(),
      city: v.string(),
      state: v.string(),
    },

    handler: async (
      ctx,
      args
    ) => {
      return await ctx.db.insert(
        "addresses",
        {
          userId: args.userId,
          fullName: args.fullName,
          phone: args.phone,
          address: args.address,
          city: args.city,
          state: args.state,
        }
      );
    },
  });

export const getAddresses =
  query({
    args: {
      userId: v.id("users"),
    },

    handler: async (
      ctx,
      args
    ) => {
      return await ctx.db
        .query("addresses")
        .filter((q) =>
          q.eq(
            q.field("userId"),
            args.userId
          )
        )
        .collect();
    },
  });

export const updateAddress =
  mutation({
    args: {
      addressId: v.id("addresses"),
      fullName: v.string(),
      phone: v.string(),
      address: v.string(),
      city: v.string(),
      state: v.string(),
    },

    handler: async (
      ctx,
      args
    ) => {
      await ctx.db.patch(
        args.addressId,
        {
          fullName:
            args.fullName,
          phone: args.phone,
          address:
            args.address,
          city: args.city,
          state: args.state,
        }
      );
    },
  });

export const deleteAddress =
  mutation({
    args: {
      addressId: v.id("addresses"),
    },

    handler: async (
      ctx,
      args
    ) => {
      await ctx.db.delete(
        args.addressId
      );
    },
  });