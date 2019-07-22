insert into spells(char_id, name, level) 
values($1, $2, $3)
returning char_id, name, level