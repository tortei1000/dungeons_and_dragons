delete from languages l
where l.id = $1;

select l.id, l.name from users u
join chars c on u.id = c.user_id
join languages l on l.char_id = c.id
where u.id = $2 and c.char_name = $3