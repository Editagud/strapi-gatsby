'use strict';

/**
 * Articles.js controller
 *
 * @description: A set of functions called "actions" for managing `Articles`.
 */

module.exports = {

  /**
   * Retrieve articles records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.articles.search(ctx.query);
    } else {
      return strapi.services.articles.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a articles record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.articles.fetch(ctx.params);
  },

  /**
   * Count articles records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.articles.count(ctx.query);
  },

  /**
   * Create a/an articles record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.articles.add(ctx.request.body);
  },

  /**
   * Update a/an articles record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.articles.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an articles record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.articles.remove(ctx.params);
  },

  /**
   * Add relation to a/an articles record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.articles.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an articles record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.articles.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an articles record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.articles.removeRelation(ctx.params, ctx.request.body);
  }
};
