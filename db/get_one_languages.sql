select l.name, l.id from users u
join chars c on u.id = c.user_id
join languages l on l.char_id = c.id
where u.id = $1 and c.char_name = $2