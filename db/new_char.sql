insert into chars(user_id, char_name) 
values($1, $2)
returning user_id, char_name