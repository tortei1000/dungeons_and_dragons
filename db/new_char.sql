insert into chars(user_id, char_name, party) 
values($1, $2, $3)
returning user_id, char_name, party