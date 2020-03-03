
exports.up = function(knex) {
    knex.schema.createTable('forums', tbl => {
        tbl.increment('id'); 
        tbl.string('title', 50)
        .notNullable()
        .unique()
        tbl.text('description', 128)
        .notNullable()
    })
    //post table lives in forum
    knex.schema.createTable('forum_post', tbl => {
        tbl.increment('id'); 
        tbl.integer('forum_id')
        .unsigned()
        .notNullable()
        .refrences('forums.id')
        .inTable('forums')
        tbl.string('post_title', 50)
        .notNullable()
        tbl.text('post_content', 300)
        .notNullable()
        //will be adding a integer that takes in user id
    })
    //comment table lives in post
    knex.schema.createTable('post_comments', tbl => {
        tbl.increment('id');
        tbl.integer('post_id')
        .unsigned()
        .refrences('forum_post.id')
        .inTable('forum_post')
        tbl.string('comment_content', 300)
        .notNullable()
      //will be adding a integer that takes in user id
    })
  };

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('forums')
  .dropTableIfExists('forum_post')
  .dropTableIfExists('post_comments')
};
