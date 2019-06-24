select f.name, f.description, f.uses from users u
join chars c on u.id = c.user_id
join features f on f.char_id = c.id
where u.id = $1 and c.char_name = $2