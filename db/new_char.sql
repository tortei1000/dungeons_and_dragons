insert into chars(user_id, char_name, last_name, char_class) 
values($1, $2, $3, $4)
returning user_id, char_name, party, char_class