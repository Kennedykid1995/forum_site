
exports.up = function(knex) {
    return knex.schema
    .createTable('forums', function(tbl){
        tbl.increments('id')
        tbl.string('title', 50).notNullable()
        tbl.text('description', 128).notNullable()
    })
    //post table lives in forum
    .createTable('forum_post', function(tbl){
        tbl.increments('id');
        tbl.string('post_title', 50).notNullable()
        tbl.text('post_content', 300).notNullable()
        tbl.integer('forum_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('forums')
        //will be adding a integer that takes in user id
    })
    //comment table lives in post
    .createTable('post_comments', function(tbl){
        tbl.increments('id')
        tbl.string('comment_content', 300).notNullable()
        tbl.integer('post_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('forum_post')
      //will be adding a integer that takes in user id
    })
  };

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('forums')
  .dropTableIfExists('forum_post')
  .dropTableIfExists('post_comments')
};