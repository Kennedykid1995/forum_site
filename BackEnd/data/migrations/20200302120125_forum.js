
exports.up = function(knex) {
    //Forum Table
  knex.schema.createTable('forum', forum => {
      forum.increament(); 
      forum.string('title', 50)
      .notNullable()
      .unique()
      forum.text('description', 128)
      .notNullable()
  })
  knex.schema.createTable('post', post => {
      post.increment(); 
      forum.integer('forum_id')
      .unsigned()
      .notNullable()
      .refrences('id')
      .inTable('forum')
      post.string('title', 50)
      .notNullable()
      post.text('content', 300)
      .notNullable()
      //will be adding a integer that takes in user id
  })
  knex.schema.createTable('comment', comment => {
      comment.increament();
      forum.integer('post_id')
      .unsigned()
      .refrences('forum_id')
      .inTable('post')
      comment.string('content', 300)
      .notNullable()
    //will be adding a integer that takes in user id
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('forum')
  .dropTableIfExists('post')
  .dropTableIfExists('comment')
};
