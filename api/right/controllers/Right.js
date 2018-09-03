'use strict';

/**
 * Right.js controller
 *
 * @description: A set of functions called "actions" for managing `Right`.
 */

module.exports = {

  /**
   * Retrieve right records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.right.search(ctx.query);
    } else {
      return strapi.services.right.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a right record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.right.fetch(ctx.params);
  },

  /**
   * Count right records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.right.count(ctx.query);
  },

  /**
   * Create a/an right record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.right.add(ctx.request.body);
  },

  /**
   * Update a/an right record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.right.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an right record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.right.remove(ctx.params);
  },

  /**
   * Add relation to a/an right record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.right.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an right record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.right.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an right record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.right.removeRelation(ctx.params, ctx.request.body);
  }
};
