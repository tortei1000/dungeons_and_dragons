select s.name, s.id, s.level from users u
join chars c on u.id = c.user_id
join spells s on s.char_id = c.id
where u.id = $1 and c.char_name = $2