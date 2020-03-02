
exports.up = function(knex) {
    //Forum Table
  knex.schema.createTable('forum', tbl => {
      tbl.increment(); 
      tbl.string('title', 50)
      .notNullable()
      .unique()
      tbl.text('description', 128)
      .notNullable()
  })
  //post table lives in forum
  knex.schema.createTable('post', tbl => {
      tbl.increment(); 
      tbl.integer('forum_id')
      .unsigned()
      .notNullable()
      .refrences('forum.id')
      .inTable('forum')
      tbl.string('title', 50)
      .notNullable()
      tbl.text('content', 300)
      .notNullable()
      //will be adding a integer that takes in user id
  })
  //comment table lives in post
  knex.schema.createTable('comment', tbl => {
      tbl.increment();
      tbl.integer('post_id')
      .unsigned()
      .refrences('post.id')
      .inTable('post')
      tbl.string('content', 300)
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
